from flask import jsonify

def success_response(data=None, message="Success", status_code=200):
    response = {
        "status": "success",
        "message": message,
        "data": data
    }
    return jsonify(response), status_code

def error_response(message="An error occurred", status_code=400):
    response = {
        "status": "error",
        "message": message,
        "data": None
    }
    return jsonify(response), status_code
