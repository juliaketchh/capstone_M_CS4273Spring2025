from src.repository.story_repository import StoryRepository

class StoryService:
    def __init__(self):
        self.repository = StoryRepository()

    def create_story(self, data):
        return self.repository.create_story(data)

    def get_user_stories(self, user_id: int) -> list:
        return self.repository.get_stories_by_user_id(user_id)

    def get_story(self, story_id):
        return self.repository.get_story_by_id(story_id)

    def update_story(self, story_id, data):
        return self.repository.update_story(story_id, data)

    def delete_story(self, story_id):
        return self.repository.delete_story(story_id)
