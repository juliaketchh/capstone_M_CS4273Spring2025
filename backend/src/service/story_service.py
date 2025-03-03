from src.repository.story_repository import StoryRepository
from src.service.workers_ai_service import WorkersAi
from flask import send_from_directory
from os.path import join, exists, abspath, dirname
from os import rename, makedirs

class StoryService:
    def __init__(self):
        self.repository = StoryRepository()
        self.image_generation_service = WorkersAi()
        self.images_directory = join(abspath(dirname(dirname(__file__))), "assets", "images")
        self.make_directories()
    
    def make_directories(self):
        makedirs(self.images_directory, exist_ok=True)
        makedirs(join(self.images_directory, "thumbnails"), exist_ok=True)

    def create_story(self, data) -> dict:
        return self.repository.create_story(data)

    def get_user_stories(self, user_id: int) -> list:
        return self.repository.get_stories_by_user_id(user_id)

    def get_story(self, story_id:int) -> dict:
        return self.repository.get_story_by_id(story_id)

    def update_story(self, story_id, data):
        return self.repository.update_story(story_id, data)

    def delete_story(self, story_id):
        return self.repository.delete_story(story_id)
    
    def create_story_thumbnail(self, story_id) -> str:
        # image stored in temp directory
        description = self.repository.get_story_exposition_by_id(story_id)
        image = self.image_generation_service.create_image_by_description(description=description)
        path = self.image_generation_service.save_image_to_file(image, f"{story_id}.jpg")
        return path
    
    def update_story_thumbnail(self, story_id) -> str:
        # if the story has an image in temp, then move it to the story image directory
        image_filename = f"{story_id}.jpg"
        temp_image_path = join(self.images_directory, "temp", image_filename)
        if exists(temp_image_path):
            new_image_path = join(self.images_directory, "thumbnails", image_filename)
            print(new_image_path)
            rename(temp_image_path, new_image_path)
            return new_image_path
        return ""

    def get_story_thumbnail(self, story_id):
        image_filename = f"{story_id}.jpg"
        thumbnail_path = join(self.images_directory, "thumbnails", image_filename)
        if exists(thumbnail_path):
            return thumbnail_path
        return ""