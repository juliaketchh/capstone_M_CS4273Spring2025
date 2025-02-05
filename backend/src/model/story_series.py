from src.database.database import db

class StorySeries(db.Model):
    __tablename__ = 'story_series'
    story_id = db.Column(db.Integer, db.ForeignKey('story.id'), primary_key=True)
    series_id = db.Column(db.Integer, db.ForeignKey('series.id'), primary_key=True)
    sequence_num = db.Column(db.Integer)
