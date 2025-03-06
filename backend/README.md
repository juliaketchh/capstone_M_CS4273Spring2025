Python Flask with PostgreSQL and SQLAlchemy ORM for backend development and API implementation.

Ollama to run the story generation AI.

## Setup instructions

Create .env file in the `backend\src\database` folder with the following format:

```
DATABASE_URI={your connection string}
```

And .env file in the `backend` folder with the following format:

```
COHERE_API_KEY={api key}
```

Replacing the bracketed item with the correct value.

Make sure `backend` is your working directory then run
`pip install -r requirements.txt`
Then run
`python app.py`

## Testing

Make sure `backend` is your working directory then run
```python -m unittest```