import unittest
from src.service.llm_service import create_llm_service, OllamaService, CohereService

class TestLLMService(unittest.TestCase):

    def test_create_ollama_service(self):
        """Test creating an OllamaService."""
        llm_service = create_llm_service("ollama")
        self.assertIsInstance(llm_service.model_service, OllamaService)
        self.assertEqual(OllamaService().model, "deepseek-r1:1.5b")

    def test_create_cohere_service(self):
        """Test creating a CohereService."""
        llm_service = create_llm_service("cohere")
        self.assertIsInstance(llm_service.model_service, CohereService)

    def test_create_unknown_service(self):
        """Test creating an unknown service."""
        with self.assertRaises(ValueError) as context:
            create_llm_service("unknown")
        self.assertEqual(str(context.exception), "Unknown model name: unknown")

if __name__ == "__main__":
    unittest.main()
