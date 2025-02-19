from src.database.database import db

class StoryCharacter(db.Model):
    __tablename__ = 'story_character'
    story_id = db.Column(db.Integer, db.ForeignKey('story.id'), primary_key=True)
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.Text)
    age = db.Column(db.Integer)