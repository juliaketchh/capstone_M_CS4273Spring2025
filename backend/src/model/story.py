from src.database.database import db

class Story(db.Model):
    __tablename__ = "story"

    id = db.Column(db.String, primary_key=True)
    title = db.Column(db.String, nullable=False)
    genre = db.Column(db.String, nullable=False)
    perspective = db.Column(db.String, nullable=False)
    tone = db.Column(db.String, nullable=False)
    content = db.Column(db.Text, nullable=False)
    image = db.Column(db.LargeBinary, nullable=True)
    series = db.Column(db.String, nullable=True)
    protagonist_name = db.Column(db.String(100), nullable=True)
    exposition = db.Column(db.Text, nullable=True)

    def __repr__(self):
        return f"<Story {self.id} - {self.protagonist_name}>"