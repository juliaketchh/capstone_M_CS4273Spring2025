from flask import Blueprint, request
from src.service.story_service import StoryService
from src.service.ollama_service import OllamaService
from src.util.response import success_response, error_response

story_bp = Blueprint("story_bp", __name__)
story_service = StoryService()
ollama_service = OllamaService()

@story_bp.route("/surprise/me", methods=["GET"])
def generate_random_story():
    story: str = ollama_service.generate_random_story()
    return success_response({"text": story})

@story_bp.route("/test", methods=["GET"])
def test():
    return success_response("test")

@story_bp.route("/", methods=["POST"])
def create_story():
    data = request.json
    story = story_service.create_story(data)
    return success_response(story.__dict__, message="Story created", status_code=201)

@story_bp.route("/", methods=["GET"])
def get_stories():
    stories = story_service.get_stories()
    return success_response([story.__dict__ for story in stories])

@story_bp.route("/<story_id>", methods=["GET"])
def get_story(story_id):
    story = story_service.get_story(story_id)
    if story:
        return success_response(story.__dict__)
    return error_response("Story not found", status_code=404)

@story_bp.route("/<story_id>", methods=["PUT"])
def update_story(story_id):
    data = request.json
    story = story_service.update_story(story_id, data)
    if story:
        return success_response(story.__dict__, message="Story updated")
    return error_response("Story not found", status_code=404)

@story_bp.route("/<story_id>", methods=["DELETE"])
def delete_story(story_id):
    if story_service.delete_story(story_id):
        return success_response({"message": "Story deleted"})
    return error_response("Story not found", status_code=404)
