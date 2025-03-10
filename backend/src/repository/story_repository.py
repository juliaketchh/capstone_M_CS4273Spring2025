from src.database.database import db
from src.model.story import Story

class StoryRepository:
    @staticmethod
    def create_story(data):
        story = Story(
            id=data.get("id"),
            user_id=data["user_id"],
            title=data["title"],
            perspective=data["perspective"],
            content=data["content"],
            exposition=data.get("exposition"),
            protagonist_id=data.get("protagonist_id"),
            image=data.get("image"),
        )
        db.session.add(story)
        db.session.commit()
        return story

    @staticmethod
    def get_stories_by_user_id(user_id):
        return Story.query.filter_by(user_id=user_id).all()

    @staticmethod
    def get_story_by_id(story_id):
        return Story.query.get(story_id)

    @staticmethod
    def update_story(story_id, data):
        story = Story.query.get(story_id)
        if story:
            for key, value in data.items():
                setattr(story, key, value)
            db.session.commit()
            return story
        return None

    @staticmethod
    def delete_story(story_id):
        story = Story.query.get(story_id)
        if story:
            db.session.delete(story)
            db.session.commit()
            return True
        return False
    
    @staticmethod
    def get_story_exposition_by_id(story_id):
        story = Story.query.get(story_id)
        if story:
            return getattr(story, "exposition")
        return ""