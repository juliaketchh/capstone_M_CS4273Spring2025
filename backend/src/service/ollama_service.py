import ollama

class OllamaService:
    def __init__(self):
        self.model = "deepseek-r1:1.5b"

    def generate_story(self, genre, perspective, tone, protagonist_name, word_count=300):
        # Customize the prompt based on user input
        """
        Generate a story based on user inputs.
        
        :param genre: Genre of the story (e.g., fantasy, mystery, sci-fi)
        :param perspective: Narrative perspective (e.g., first-person, third-person)
        :param tone: Tone of the story (e.g., happy, dark, adventurous)
        :param protagonist_name: Name of the main character
        :param word_count: Desired length of the story (default: 300 words)
        :return: Generated story
        """
        prompt = f"Write a {word_count}-word {genre} story in the {perspective} perspective with a {tone} tone, featuring a protagonist named {protagonist_name}."
        
        # Query Ollama to generate the story
        response = ollama.chat(model=self.model, messages=[{"role": "user", "content": prompt}])
        story = response['message']['content']
        return self.remove_deepseeks_thought(story)
    
    def generate_random_story(self):
        prompt = "Write a story that will surprise me"
        
        # Query Ollama to generate the story
        response = ollama.chat(model=self.model, messages=[{"role": "user", "content": prompt}])
        story: str = response['message']['content']
        return self.remove_deepseeks_thought(story)
    
    def remove_deepseeks_thought(self, response) -> str:
        if "<think>" not in response:
            return response
        
        def extract_after_think(text):
            # Find the index of the closing </think> tag
            end_tag = "</think>"
            index = text.find(end_tag)
            
            # If the closing tag is found, extract everything after it
            if index != -1:
                return text[index + len(end_tag):].strip()
            
            # If the tag is not found, return an empty string or a message
            return ""
        
        return extract_after_think(response)
    
    def continue_story(self, current_story, genre, perspective, tone, protagonist_name):
        """
        Continue the current story by generating the next part using the same parameters.

        Parameters:
        current_story (str): The ongoing story to continue.
        genre (str): The genre of the story.
        perspective (str): The perspective of the story (first-person or third-person).
        tone (str): The tone of the story (e.g., adventurous, mysterious).
        protagonist_name (str): The name of the protagonist in the story.

        Returns:
        str: The updated story with the continuation appended.
        """
        # Prepare the prompt to continue the story
        prompt = (f"Continue the following {genre} story in the {perspective} perspective with a {tone} tone. "
                  f"The protagonist, {protagonist_name}, is involved in the following situation:\n"
                  f"{current_story}\n")
        
        # Query Ollama to generate the continuation of the story
        response = ollama.chat(model=self.model, messages=[{"role": "user", "content": prompt}])
        
        # Extract the continuation from the response
        continuation = response['message']['content']

        continuation = self.remove_deepseeks_thought(continuation)
        
        # Append the continuation to the current story
        updated_story = current_story + "\n" + continuation
        return updated_story