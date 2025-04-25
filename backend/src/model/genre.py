from src.database.database import db

class Genre(db.Model):
    __tablename__ = 'genre'
    id = db.Column(db.Integer, primary_key=True)
    genre = db.Column(db.String, unique=True, nullable=False)

    def __repr__(self):
        return f"<Genre {self.genre}>"