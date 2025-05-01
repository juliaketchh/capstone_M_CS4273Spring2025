from src.database.database import db

story_genre = db.Table(
    'story_genre',
    db.Column('story_id', db.Integer, db.ForeignKey('story.id'), primary_key=True),
    db.Column('genre_id', db.Integer, db.ForeignKey('genre.id'), primary_key=True)
)