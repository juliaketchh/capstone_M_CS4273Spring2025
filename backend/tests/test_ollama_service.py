from src.service.ollama_service import OllamaService
import unittest
from unittest.mock import patch

class TestOllamaService(unittest.TestCase):

    @patch('ollama.chat')  # Mock the `ollama.chat` method
    def test_generate_story(self, mock_chat):
        # Setup the mock response for the chat call
        mock_chat.return_value = {'message': {'content': 'Once upon a time, there was a brave knight named John.'}}


        # Create an instance of the OllamaService class
        service = OllamaService()

        # Define the input parameters for the test
        genre = 'fantasy'
        perspective = 'first-person'
        tone = 'adventurous'
        protagonist_name = 'John'

        # Call the method to test
        story = service.generate_story(genre, perspective, tone, protagonist_name)

        # Check that the response from Ollama is as expected
        self.assertEqual(story, 'Once upon a time, there was a brave knight named John.')

        # Verify that the mock method was called with the correct prompt
        expected_prompt = f"Write a {genre} story in the {perspective} perspective with a {tone} tone, featuring a protagonist named {protagonist_name}."
        mock_chat.assert_called_once_with(model='deepseek-r1:1.5b', messages=[{"role": "user", "content": expected_prompt}])

    @patch('ollama.chat')  # Mock the `ollama.chat` method
    def test_generate_random_story(self, mock_chat):
        # Setup the mock response for the random story call
        mock_chat.return_value = {'message': {'content': 'A surprising story awaits, but the plot is unknown!'}}

        # Create an instance of the OllamaService class
        service = OllamaService()

        # Call the method to test
        story = service.generate_random_story()

        # Check that the response from Ollama is as expected
        self.assertEqual(story, 'A surprising story awaits, but the plot is unknown!')

        # Verify that the mock method was called with the correct prompt
        mock_chat.assert_called_once_with(model='deepseek-r1:1.5b', messages=[{"role": "user", "content": "Write a story that will surprise me"}])

    def test_generate_random_story_2(self):
        service = OllamaService()
        story = service.generate_random_story()

        print(story)

if __name__ == '__main__':
    unittest.main()
