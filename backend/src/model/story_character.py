from src.database.database import db

class StoryCharacter(db.Model):
    __tablename__ = 'story_character'

    id = db.Column(db.Integer, primary_key=True)
    story_id = db.Column(db.Integer, db.ForeignKey('story.id'))
    name = db.Column(db.String, nullable=False)
    description = db.Column(db.Text)
    age = db.Column(db.Integer)

    def to_dict(self):
        return {
            "id": self.id,
            "story_id": self.story_id,
            "name": self.name,
            "description": self.description,
            "age": self.age
        }
