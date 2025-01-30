import uuid
from src.database.database import db
from src.model.story import Story

class StoryRepository:
    @staticmethod
    def create_story(data):
        story_id = str(uuid.uuid4())
        story = Story(
            id=story_id,
            title=data["title"],
            genre=data["genre"],
            perspective=data["perspective"],
            tone=data["tone"],
            content=data["content"],
            image=data.get("image"),
            series=data.get("series"),
        )
        db.session.add(story)
        db.session.commit()
        return story

    @staticmethod
    def get_all_stories():
        return Story.query.all()

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
