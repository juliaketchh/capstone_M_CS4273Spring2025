from src.database.database import db

class StoryTheme(db.Model):
    __tablename__ = 'story_theme'
    story_id = db.Column(db.Integer, db.ForeignKey('story.id'), primary_key=True)
    theme = db.Column(db.String, nullable=False)