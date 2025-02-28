import dotenv
from os.path import dirname, join
from os import getenv
import requests
import json
from PIL import Image
from io import BytesIO

backend_directory = dirname(dirname(dirname(__file__)))
dotenv.load_dotenv(join(backend_directory, ".env"))

# cloudflares workers ai for image generation


class WorkersAi:
    def __init__(self):
        self.account_id = getenv("CLOUDFLARE_ACCOUNT_ID")
        self.api_token = getenv("CLOUDFLARE_API_TOKEN")

    def create_image_by_description(self, description:str) -> bytes:
        header = {
            "Authorization": f'Bearer {self.api_token}',
            "Conent-Type": "image/jpg"
        }
        url = f'https://api.cloudflare.com/client/v4/accounts/{self.account_id}/ai/run/@cf/lykon/dreamshaper-8-lcm'
        payload = { "prompt": description }
        json_payload = json.dumps(payload)
        result = requests.post(url=url, data=json_payload, headers=header)
        image_bytes = result.content
        return image_bytes
        

    def render_image_from_bytes(self, bytes) -> None:
        image = Image.open(BytesIO(bytes))
        image.show()
