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

## Testing

Make sure `backend` is your working directory then run
```python -m unittest```

To test specific files, run
```python -m unittest test.test_file_name```
