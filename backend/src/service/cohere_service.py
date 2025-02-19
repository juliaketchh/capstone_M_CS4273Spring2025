import cohere
import dotenv
from os.path import dirname, join
from os import getenv

backend_directory = dirname(dirname(dirname(__file__)))
dotenv.load_dotenv(join(backend_directory, ".env"))
class CohereService:
    def __init__(self):
        self.co = cohere.ClientV2(api_key=getenv("COHERE_API_KEY"))

    def generate_story(self, genre, perspective, tone, protagonist_name):
        # Customize the prompt based on user input
        prompt = f"Write a {genre} story in the {perspective} perspective with a {tone} tone, featuring a protagonist named {protagonist_name}."

        # Query Cohere to generate the story
        response = self.co.chat(model="command-r-plus-08-2024", messages=[{"role": "user", "content": prompt}])
        story = response.message.content[0].text
        return story
    
    def generate_random_story(self):
        prompt = "Write a story that will surprise me"

        # Query Cohere to generate the story
        response = self.co.chat(model="command-r-plus-08-2024", messages=[{"role": "user", "content": prompt}])
        story = response.message.content[0].text
        return story
    
if __name__ == '__main__':
    service = CohereService()
    story = service.generate_random_story()
    print(story)