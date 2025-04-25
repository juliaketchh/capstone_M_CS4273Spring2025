from flask import Blueprint, request
from src.service.char_service import CharacterService
from src.util.response import success_response, error_response

char_bp = Blueprint("char_bp", __name__)
char_service = CharacterService()

@char_bp.route("/", methods=["POST"])
def create_character():
    data = request.json
    try:
        character = char_service.create_character(data)
        return success_response(character.to_dict(), message="Character created", status_code=201)
    except Exception as e:
        return error_response(str(e))

@char_bp.route("/", methods=["GET"])
def get_characters():
    characters = char_service.get_all_characters()
    return success_response([c.to_dict() for c in characters])
