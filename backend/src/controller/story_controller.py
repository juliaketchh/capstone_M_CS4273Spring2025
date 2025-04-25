from flask import Blueprint, request, send_file
from src.service.story_service import StoryService
from src.service.llm_service import create_llm_service
from src.util.response import success_response, error_response

story_bp = Blueprint("story_bp", __name__)
story_service = StoryService()
llm_service = create_llm_service("ollama")  # Change "ollama" to "cohere" to switch models

@story_bp.route("/surprise/me", methods=["GET"])
def generate_random_story():
    story: str = llm_service.generate_random_story()
    return success_response({"text": story})

@story_bp.route("/test", methods=["GET"])
def test():
    return success_response("test")

@story_bp.route("/generate", methods=["POST"])
def generate_story():
    data = request.json
    try:
        # Generate the story text using the LLM service
        title, content, exposition = llm_service.generate_story(
            genre=data.get("genre"),
            perspective=data.get("perspective"),
            tone=data.get("tone"),
            protagonist_name=data.get("protagonist_name"),
            word_count=data.get("word_count", 300)
        )
        # Add the generated story to the data
        data["title"] = title
        data["content"] = content
        data["exposition"] = exposition

        # Insert the story into the database
        story = story_service.create_story(data)
        if not story:
            return error_response("Failed to generate story", status_code=500)
        
        # Create the story thumbnail
        thumbnail_path = story_service.create_story_thumbnail(story.id)
        if not thumbnail_path:
            return error_response("Failed to create thumbnail", status_code=500)
        story_service.update_story_thumbnail(story.id)

        # Return the generated story object
        return success_response(story.to_dict(), message="Story generated", status_code=201)
    except Exception as e:
        return error_response(f"An error occurred: {str(e)}", status_code=500)

@story_bp.route("/", methods=["POST"])
def create_story():
    data = request.json
    story = story_service.create_story(data)
    return success_response(story.to_dict(), message="Story created", status_code=201)

@story_bp.route("/user/<user_id>", methods=["GET"])
def get_user_stories(user_id):
    stories = story_service.get_user_stories(user_id)
    if not stories:
        return error_response("No stories found", status_code=404)
    return success_response([story.to_dict() for story in stories])

@story_bp.route("/<story_id>", methods=["GET"])
def get_story(story_id):
    story = story_service.get_story(story_id)
    if story:
        return success_response(story.to_dict())
    return error_response("Story not found", status_code=404)

@story_bp.route("/<story_id>", methods=["PUT"])
def update_story(story_id):
    data = request.json
    story = story_service.update_story(story_id, data)
    if story:
        return success_response(story.to_dict(), message="Story updated")
    return error_response("Story not found", status_code=404)

@story_bp.route("/<story_id>", methods=["DELETE"])
def delete_story(story_id):
    if story_service.delete_story(story_id):
        return success_response({"message": "Story deleted"})
    return error_response("Story not found", status_code=404)

@story_bp.route("/thumbnail/get/<story_id>", methods=["GET"])
def get_story_thumbnail(story_id):
    story = story_service.get_story(story_id)
    if not story:
        return error_response("Story not found", status_code=404)
    
    image = story_service.get_story_thumbnail(story_id)
    if image:
        return send_file(image, mimetype="image/jpg")
    return error_response("Thumbnail not found", status_code=404)

@story_bp.route("/thumbnail/new/<story_id>", methods=["GET"])
def get_new_story_thumbnail(story_id):
    story = story_service.get_story(story_id)
    if not story:
        return error_response("Story not found", status_code=404)
    
    image = story_service.create_story_thumbnail(story_id=story_id)
    if image:
        return send_file(image, mimetype="image/jpg")
    return error_response("Thumbnail not found", status_code=404)

@story_bp.route("/thumbnail/update/<story_id>", methods=["GET"])
def update_story_thumbnail(story_id):
    story = story_service.get_story(story_id)
    if not story:
        return error_response("Story not found", status_code=404)
    
    image = story_service.update_story_thumbnail(story_id=story_id)
    if image:
        return send_file(image, mimetype="image/jpg")
    return error_response("Thumbnail not found", status_code=404)