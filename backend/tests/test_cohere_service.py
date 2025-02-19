import unittest
from unittest.mock import patch, MagicMock
from src.service.cohere_service import CohereService

class TestCohereService(unittest.TestCase):

    @patch('cohere.ClientV2')
    def setUp(self, MockClient):
        self.mock_client = MockClient.return_value
        self.service = CohereService()

    def test_generate_story(self):
        # Mock the response from the cohere client
        mock_response = MagicMock()
        mock_response.message.content[0].text = "Once upon a time..."
        self.mock_client.chat.return_value = mock_response

        # Call the method
        story = self.service.generate_story("fantasy", "first-person", "mysterious", "Alice")

        # Assertions
        self.mock_client.chat.assert_called_once_with(
            model="command-r-plus-08-2024",
            messages=[{"role": "user", "content": "Write a fantasy story in the first-person perspective with a mysterious tone, featuring a protagonist named Alice."}]
        )
        self.assertEqual(story, "Once upon a time...")

    def test_generate_random_story(self):
        # Mock the response from the cohere client
        mock_response = MagicMock()
        mock_response.message.content[0].text = "A surprising story..."
        self.mock_client.chat.return_value = mock_response

        # Call the method
        story = self.service.generate_random_story()

        # Assertions
        self.mock_client.chat.assert_called_once_with(
            model="command-r-plus-08-2024",
            messages=[{"role": "user", "content": "Write a story that will surprise me"}]
        )
        self.assertEqual(story, "A surprising story...")

    def test_generate_random_story_2(self):
        service = CohereService()
        story = service.generate_random_story()
        print("Cohere story:\n", story)
        self.assertIsNotNone(story)

if __name__ == '__main__':
    unittest.main()