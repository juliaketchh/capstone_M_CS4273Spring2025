from src.database.database import db

class User(db.Model):
    __tablename__ = 'user'
    id = db.Column(db.Integer, primary_key=True)
    # Add other user fields as needed
    stories = db.relationship('Story', backref='author', lazy=True)