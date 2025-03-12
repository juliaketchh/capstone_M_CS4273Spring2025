Python Flask with PostgreSQL and SQLAlchemy ORM for backend development and API implementation.

Ollama to run the story generation AI.

## Setup instructions

1. Add a .env file in the `backend` folder with the following format:

```
DATABASE_URI={your connection string}
COHERE_API_KEY={api key}
CLOUDFLARE_API_TOKEN={token}
CLOUDFLARE_ACCOUNT_ID={account id}
```

Replacing the bracketed item with the correct value.

2. Make sure `backend` is your working directory then run
`pip install -r requirements.txt`

3. Then run
`python app.py`

4. The API can be found at localhost:5000

5. Install ollama client from `https://github.com/ollama/ollama`

6. Download the deepseek model by running the following in a terminal
`ollama pull deepseek-r1:1.5b`

## Testing

Make sure `backend` is your working directory then run
```python -m unittest```

To test specific files, run
```python -m unittest test.test_file_name```

## Usage

All APIs are found at localhost:5000/api/* where the path immediately following api is the name of a controller.
Controller acts as routes of the API. Controller uses services which contain the business logic. Services use repositories to interact with database. Models are relation tables as code.
