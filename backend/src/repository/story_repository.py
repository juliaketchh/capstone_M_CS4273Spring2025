from src.database.database import db
from src.model.story import Story
from src.model.genre import Genre

class StoryRepository:
    @staticmethod
    def create_story(data):
        # Create a new Story object
        story = Story(
            user_id=data.get("user_id"),
            title=data.get("title", ""),
            perspective=data.get("perspective", ""),
            content=data.get("content", ""), 
            exposition=data.get("exposition", ""), 
            protagonist_id=data.get("protagonist_id"),
        )
        
        # Handle genres if provided
        genre_names = data.get("genres", [])  # Expecting a list of genre names
        for genre_name in genre_names:
            genre = Genre.query.filter_by(genre=genre_name).first()
            if not genre:
                # Create the genre if it doesn't exist
                genre = Genre(genre=genre_name)
                db.session.add(genre)
            story.genres.append(genre)

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