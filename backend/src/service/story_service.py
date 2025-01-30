from src.repository.story_repository import StoryRepository

class StoryService:
    def __init__(self):
        self.repository = StoryRepository()

    def create_story(self, data):
        return self.repository.create_story(data)

    def get_stories(self):
        return self.repository.get_all_stories()

    def get_story(self, story_id):
        return self.repository.get_story_by_id(story_id)

    def update_story(self, story_id, data):
        return self.repository.update_story(story_id, data)

    def delete_story(self, story_id):
        return self.repository.delete_story(story_id)
