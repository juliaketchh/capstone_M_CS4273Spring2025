from flask import Flask
from src.controller.story_controller import story_bp
from src.controller.user_controller import user_bp
from src.controller.auth_controller import auth_bp

def create_app():
    app = Flask(__name__)

    # Register Blueprints (controllers)
    app.register_blueprint(story_bp, url_prefix='/api/story')
    app.register_blueprint(user_bp, url_prefix='/api/user')
    app.register_blueprint(auth_bp, url_prefix='/api/auth')

    return app