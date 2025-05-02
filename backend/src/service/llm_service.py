from src.service.ollama_service import OllamaService
from src.service.cohere_service import CohereService

class LLMService:
    def __init__(self, model_service):
        self.model_service = model_service

    def generate_random_story(self):
        return self.model_service.generate_random_story()
    
    def generate_story(self, genre, perspective, tone, protagonist_name, word_count=300):
        return self.model_service.generate_story(genre, perspective, tone, protagonist_name, word_count)

# Factory function to create the appropriate LLM service
def create_llm_service(model_name):
    if model_name == "ollama":
        return LLMService(OllamaService())
    elif model_name == "cohere":
        return LLMService(CohereService())
    else:
        raise ValueError(f"Unknown model name: {model_name}")
