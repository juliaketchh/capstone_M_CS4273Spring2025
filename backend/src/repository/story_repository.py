from src.database.database import db
from src.model.story import Story
from src.model.genre import Genre
from src.model.story_theme import StoryTheme
from src.model.story_tone import StoryTone
from src.model.story_character import StoryCharacter
from src.model.story_series import StorySeries

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
        
        # Handle genres
        genre_names = data.get("genres", [])
        for genre_name in genre_names:
            genre = Genre.query.filter_by(genre=genre_name).first()
            if not genre:
                genre = Genre(genre=genre_name)
                db.session.add(genre)
            story.genres.append(genre)

        # Handle themes
        themes = data.get("themes", [])
        for theme_name in themes:
            theme = StoryTheme(theme=theme_name)
            story.themes.append(theme)

        # Handle tones
        tones = data.get("tones", [])
        for tone_name in tones:
            tone = StoryTone(tone=tone_name)
            story.tones.append(tone)

        # Handle characters
        characters = data.get("characters", [])
        for character_data in characters:
            character = StoryCharacter(
                name=character_data.get("name"),
                description=character_data.get("description"),
                age=character_data.get("age"),
            )
            story.characters.append(character)

        # Handle series
        series_data = data.get("series", [])
        for series_entry in series_data:
            story_series = StorySeries(
                series_id=series_entry.get("series_id"),
                sequence_num=series_entry.get("sequence_num"),
            )
            story.series.append(story_series)

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