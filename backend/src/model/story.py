from src.database.database import db

class Story(db.Model):
    __tablename__ = 'story'
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    title = db.Column(db.String, nullable=False)
    perspective = db.Column(db.String, nullable=False)
    content = db.Column(db.Text, nullable=False)
    exposition = db.Column(db.Text)
    protagonist_id = db.Column(db.Integer)
    image = db.Column(db.LargeBinary)

    genres = db.relationship('Genre', secondary='story_genre', backref='stories')
    themes = db.relationship('StoryTheme', backref='story', lazy=True)
    tones = db.relationship('StoryTone', backref='story', lazy=True)
    characters = db.relationship('StoryCharacter', backref='story', lazy=True)
    series = db.relationship('StorySeries', backref='story', lazy=True)

    def __repr__(self):
        return f"<Story {self.id} - {self.protagonist_name}>"