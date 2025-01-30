from flask import Blueprint, request, jsonify
from src.service.story_service import StoryService
from src.service.ollama_service import OllamaService

story_bp = Blueprint("story_bp", __name__)
story_service = StoryService()
ollama_service = OllamaService()

@story_bp.route("/surprise/me", methods=["GET"])
def generate_random_story():
    story: str = ollama_service.generate_random_story()
    return jsonify({"text": story}), 200

@story_bp.route("/test", methods=["GET"])
def test():
    return jsonify("test"), 200

@story_bp.route("/", methods=["POST"])
def create_story():
    data = request.json
    story = story_service.create_story(data)
    return jsonify(story.__dict__), 201

@story_bp.route("/", methods=["GET"])
def get_stories():
    stories = story_service.get_stories()
    return jsonify([story.__dict__ for story in stories])

@story_bp.route("/<story_id>", methods=["GET"])
def get_story(story_id):
    story = story_service.get_story(story_id)
    if story:
        return jsonify(story.__dict__)
    return jsonify({"error": "Story not found"}), 404

@story_bp.route("/<story_id>", methods=["PUT"])
def update_story(story_id):
    data = request.json
    story = story_service.update_story(story_id, data)
    if story:
        return jsonify(story.__dict__)
    return jsonify({"error": "Story not found"}), 404

@story_bp.route("/<story_id>", methods=["DELETE"])
def delete_story(story_id):
    if story_service.delete_story(story_id):
        return jsonify({"message": "Story deleted"})
    return jsonify({"error": "Story not found"}), 404
