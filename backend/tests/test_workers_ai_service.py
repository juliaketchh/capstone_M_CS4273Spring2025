import unittest
from src.service.workers_ai_service import WorkersAi

class TestWorkersAiService(unittest.TestCase):
    def setUp(self):
        self.workers_ai_service = WorkersAi()

    def test_lullaby_image_generation(self):
        description=  "Lullaby: A little butterly traveled to see his friend cat"

        image_bytes = self.workers_ai_service.create_image_by_description(description)

        self.assertIsNotNone(image_bytes)