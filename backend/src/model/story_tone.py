from src.database.database import db

class StoryTone(db.Model):
    __tablename__ = 'story_tone'
    story_id = db.Column(db.Integer, db.ForeignKey('story.id'), primary_key=True)
    tone = db.Column(db.String, nullable=False)