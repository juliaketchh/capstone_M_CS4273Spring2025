from flask import Blueprint, request, jsonify
from src.service.user_service import UserService

user_bp = Blueprint('user_bp', __name__)
user_service = UserService()

@user_bp.route('/', methods=['POST'])
def create_user():
    data = request.json
    user = user_service.create_user(data)
    return jsonify(user), 201

@user_bp.route('/<user_id>', methods=['GET'])
def get_user(user_id):
    user = user_service.get_user(user_id)
    return jsonify(user) if user else (jsonify({"error": "User not found"}), 404)
