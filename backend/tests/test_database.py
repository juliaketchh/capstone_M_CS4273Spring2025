import unittest
from flask import Flask
from src.database.database import db, init_db

class TestDatabaseInit(unittest.TestCase):

    def setUp(self):
        """Set up a Flask test app with a real database connection (SQLite in-memory)."""
        self.app = Flask(__name__)
        
        self.app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
        self.app.config["TESTING"] = True

        # Initialize the database
        init_db(self.app, test=True)

        # Create a test client
        self.client = self.app.test_client()

    def test_database_initialization(self):
        """Verify that the database initializes correctly within the app context."""
        with self.app.app_context():
            # Check if the database session is available
            self.assertIsNotNone(db.session)

            # Check if the database engine is connected
            engine = db.engine
            self.assertTrue(engine)

if __name__ == "__main__":
    unittest.main()