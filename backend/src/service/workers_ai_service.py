import dotenv
from os.path import dirname, join
from os import getenv
import requests
import json

backend_directory = dirname(dirname(dirname(__file__)))
dotenv.load_dotenv(join(backend_directory, ".env"))

# cloudflares workers ai for image generation
class WorkersAi:
    def __init__(self):
        self.account_id = getenv("CLOUDFLARE_ACCOUNT_ID")
        self.api_token = getenv("CLOUDFLARE_API_TOKEN")

    def create_image_by_description(self, description):
        header = {
            "Authorization": f'Bearer {self.api_token}'
        }
        url = f'https://api.cloudflare.com/client/v4/accounts/{self.account_id}/ai/run/@cf/lykon/dreamshaper-8-lcm'
        payload = { "prompt": description }
        print(payload)
        result = requests.post(url=url, data=payload, headers=header)
        print(result.content)


if __name__ == "__main__":
    generator = WorkersAi()

    generator.create_image_by_description("A cat")