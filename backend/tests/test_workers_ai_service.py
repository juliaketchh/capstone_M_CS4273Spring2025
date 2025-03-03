import unittest
from os.path import exists
from os import remove
from src.service.workers_ai_service import WorkersAi

class TestWorkersAiService(unittest.TestCase):
    def setUp(self):
        self.workers_ai_service = WorkersAi()

    def test_lullaby_image_generation(self):
        description=  "Lullaby: A little butterly traveled to see his friend cat"

        image_bytes = self.workers_ai_service.create_image_by_description(description)

        self.assertIsNotNone(image_bytes)

    def test_save_image_to_file(self):
        image_bytes = self.workers_ai_service.create_image_by_description("a lovely duck")
        filename = "temp.jpg"
        self.workers_ai_service.save_image_to_file(image_bytes, filename)

        self.assertTrue(exists(f"src/assets/images/temp/{filename}"))
        remove(f"src/assets/images/temp/{filename}")