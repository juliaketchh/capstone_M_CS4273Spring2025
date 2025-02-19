import unittest
from flask import Flask
from src.util.response import success_response, error_response

class TestResponse(unittest.TestCase):

    def setUp(self):
        """Set up a Flask test app."""
        self.app = Flask(__name__)
        self.app.config["TESTING"] = True
        self.client = self.app.test_client()

    def test_success_response(self):
        """Test the success_response function."""
        with self.app.test_request_context():
            response, status_code = success_response({"key": "value"}, message="Test success", status_code=200)
            json_data = response.get_json()
            
            self.assertEqual(status_code, 200)
            self.assertEqual(json_data["status"], "success")
            self.assertEqual(json_data["message"], "Test success")
            self.assertEqual(json_data["data"], {"key": "value"})

    def test_default_success_response(self):
        """Test the default success_response function."""
        with self.app.test_request_context():
            response, status_code = success_response()
            json_data = response.get_json()
            
            self.assertEqual(status_code, 200)
            self.assertEqual(json_data["status"], "success")
            self.assertEqual(json_data["message"], "Success")
            self.assertIsNone(json_data["data"])

    def test_error_response(self):
        """Test the error_response function."""
        with self.app.test_request_context():
            response, status_code = error_response(message="Test error", status_code=400)
            json_data = response.get_json()
            
            self.assertEqual(status_code, 400)
            self.assertEqual(json_data["status"], "error")
            self.assertEqual(json_data["message"], "Test error")
            self.assertIsNone(json_data["data"])

if __name__ == "__main__":
    unittest.main()
