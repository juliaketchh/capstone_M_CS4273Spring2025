import sys
import os
from flask import Flask
from dotenv import load_dotenv

# Add the project directory to the Python path
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

from src.database.database import db, init_db
from src.model.story import Story
from src.model.user import User
from src.model.genre import Genre
from src.model.story_genre import StoryGenre
from src.model.story_theme import StoryTheme
from src.model.story_tone import StoryTone
from src.model.story_character import StoryCharacter
from src.model.series import Series
from src.model.story_series import StorySeries

def insert_mock_data():
    app = Flask(__name__)
    init_db(app)

    with app.app_context():

        # Create a user
        user = User(id=1)
        db.session.add(user)

        # Create genres
        genre1 = Genre(id=1, genre="Fantasy")
        genre2 = Genre(id=2, genre="Science Fiction")
        db.session.add(genre1)
        db.session.add(genre2)

        # Create a series
        series = Series(id=1, title="Epic Saga")
        db.session.add(series)

        # Create a story
        story = Story(
            id=1,
            user_id=1,
            title="The Great Adventure",
            perspective="First Person",
            content="Once upon a time...",
            exposition="In a land far away...",
            protagonist_id=1,
            image=None
        )
        db.session.add(story)
        db.session.commit()  # Commit the story to generate the story_id

        # Create story genres
        story_genre1 = StoryGenre(story_id=story.id, genre_id=1)
        story_genre2 = StoryGenre(story_id=story.id, genre_id=2)
        db.session.add(story_genre1)
        db.session.add(story_genre2)

        # Create story themes
        story_theme = StoryTheme(story_id=story.id, theme="Hero's Journey")
        db.session.add(story_theme)

        # Create story tones
        story_tone = StoryTone(story_id=story.id, tone="Adventurous")
        db.session.add(story_tone)

        # Create story characters
        story_character = StoryCharacter(story_id=story.id, name="John", description="Brave hero", age=30)
        db.session.add(story_character)

        # Create story series
        story_series = StorySeries(story_id=story.id, series_id=1, sequence_num=1)
        db.session.add(story_series)

        db.session.commit()
        print("Mock data inserted successfully.")

if __name__ == "__main__":
    insert_mock_data()
