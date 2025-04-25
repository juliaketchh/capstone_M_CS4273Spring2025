from src.database.database import db
from src.model.story_genre import story_genre
from src.model.story_theme import StoryTheme
from src.model.story_tone import StoryTone
from src.model.story_series import StorySeries
from src.model.genre import Genre
from src.model.story_character import StoryCharacter
from src.model.user import User

class Story(db.Model):
    __tablename__ = 'story'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.String, db.ForeignKey('user.id'), nullable=False)
    title = db.Column(db.String, nullable=False)
    perspective = db.Column(db.String)
    content = db.Column(db.Text, nullable=False)
    exposition = db.Column(db.Text)
    protagonist_id = db.Column(db.Integer)

    genres = db.relationship('Genre', secondary=story_genre, backref='stories')
    themes = db.relationship('StoryTheme', backref='story', lazy=True)
    tones = db.relationship('StoryTone', backref='story', lazy=True)
    characters = db.relationship('StoryCharacter', backref='story', lazy=True)
    series = db.relationship('StorySeries', backref='story', lazy=True)

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'title': self.title,
            'perspective': self.perspective,
            'content': self.content,
            'exposition': self.exposition,
            'protagonist_id': self.protagonist_id,
            'genres': [genre.genre for genre in self.genres],
            'themes': [theme.theme for theme in self.themes],
            'tones': [tone.tone for tone in self.tones],
            'characters': [
                {
                    'name': character.name,
                    'description': character.description,
                    'age': character.age,
                }
                for character in self.characters
            ],
            'series': [
                {
                    'series_id': series.series_id,
                    'sequence_num': series.sequence_num,
                }
                for series in self.series
            ],
        }

    def __repr__(self):
        return f"<Story {self.id} - {self.title}>"