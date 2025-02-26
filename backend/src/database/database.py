from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
import os
from os.path import join, dirname

db = SQLAlchemy()

def init_db(app, config=None, test=False) -> None:
    backend_directory = dirname(dirname(dirname(__file__)))
    load_dotenv(join(backend_directory, ".env"))
    if config:
        app.config.from_object(config)
    else:
        app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('DATABASE_URI')

    if app.config['SQLALCHEMY_DATABASE_URI'] is None:
        print("Error: connection string not found")
        return
    
    if test:
        print(app.config['SQLALCHEMY_DATABASE_URI'])

    db.init_app(app)
    with app.app_context():
        db.create_all()  # Creates tables if they don’t exist
