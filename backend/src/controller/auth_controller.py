from flask import Blueprint, request, jsonify
from src.service.auth_service import AuthService

auth_bp = Blueprint('auth_bp', __name__)
auth_service = AuthService()

@auth_bp.route('/login', methods=['POST'])
def login():
    data = request.json
    response = auth_service.login(data)
    return jsonify(response)

@auth_bp.route('/signup', methods=['POST'])
def signup():
    data = request.json
    response = auth_service.signup(data)
    return jsonify(response), 201
