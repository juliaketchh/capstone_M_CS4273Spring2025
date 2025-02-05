from src.database.database import db

class StoryGenre(db.Model):
    __tablename__ = 'story_genre'
    story_id = db.Column(db.Integer, db.ForeignKey('story.id'), primary_key=True)
    genre_id = db.Column(db.Integer, db.ForeignKey('genre.id'), primary_key=True)