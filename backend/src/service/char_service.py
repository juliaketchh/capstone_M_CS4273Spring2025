from src.database.database import db
from src.model.story_character import StoryCharacter

class CharacterService:
    def create_character(self, data):
        name = data.get("name")
        description = data.get("description", "")
        age = data.get("age")
        story_id = data.get("story_id") 

        if not name:
            raise Exception("Character name is required")

        char = StoryCharacter(
            name=name,
            description=description,
            age=age,
            story_id=story_id
        )
        db.session.add(char)
        db.session.commit()
        return char

    def get_all_characters(self):
        return StoryCharacter.query.all()
