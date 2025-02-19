import unittest
from flask import Flask
from src.controller.story_controller import story_bp
from src.database.database import init_db

class TestStoryController(unittest.TestCase):
    def setUp(self):
        self.app = Flask(__name__)
        init_db(self.app, test=True)
        self.app.register_blueprint(story_bp)
        self.client = self.app.test_client()

    def test_test_endpoint(self):
        response = self.client.get("/test")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json, {"status": "success", "message": "Success", "data": "test"})

    def test_generate_random_story(self):
        response = self.client.get("/surprise/me")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json["status"], "success")
        self.assertIsNotNone(response.json["data"])

    def test_get_user_stories(self):
        response = self.client.get("/user/1")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json["status"], "success")
        self.assertIsNotNone(response.json["data"])

    def test_get_story(self):
        response = self.client.get("/1")
        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json["status"], "success")
        self.assertIsNotNone(response.json["data"])

    def test_get_story_not_found(self):
        response = self.client.get("/0")
        self.assertEqual(response.status_code, 404)
        self.assertEqual(response.json["status"], "error")
        self.assertEqual(response.json["message"], "Story not found")

if __name__ == "__main__":
    unittest.main()