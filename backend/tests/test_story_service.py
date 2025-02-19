import unittest
from unittest.mock import MagicMock
from src.service.story_service import StoryService

class TestStoryService(unittest.TestCase):
    def setUp(self):
        self.story_service = StoryService()
        self.story_service.repository = MagicMock()

    def test_get_user_stories(self):
        user_id = 1
        expected_stories = [{'id': 1, 'title': 'Story 1'}, {'id': 2, 'title': 'Story 2'}]
        self.story_service.repository.get_stories_by_user_id.return_value = expected_stories

        result = self.story_service.get_user_stories(user_id)

        self.story_service.repository.get_stories_by_user_id.assert_called_once_with(user_id)
        self.assertEqual(result, expected_stories)

    def test_get_user_stories_empty(self):
        user_id = 1
        expected_stories = []
        self.story_service.repository.get_stories_by_user_id.return_value = expected_stories

        result = self.story_service.get_user_stories(user_id)

        self.story_service.repository.get_stories_by_user_id.assert_called_once_with(user_id)
        self.assertEqual(result, expected_stories)

    def test_get_story(self):
        story_id = 1
        expected_story = {'id': 1, 'title': 'Story 1'}
        self.story_service.repository.get_story_by_id.return_value = expected_story

        result = self.story_service.get_story(story_id)

        self.story_service.repository.get_story_by_id.assert_called_once_with(story_id)
        self.assertEqual(result, expected_story)

if __name__ == '__main__':
    unittest.main()