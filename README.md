# Capstone Project: AI-Powered Story Generator

## Project Description
Our capstone project involves developing a software program that uses Large Language Models (LLMs) to generate a variety of stories, such as children's bedtime stories. The program will also incorporate additional AI technologies to generate an image representing each story. 

The stories created by the system will be highly customizable, allowing users to tailor:
- **Genre** (e.g., fantasy, mystery, science fiction)
- **Perspective** (e.g., first-person, third-person)
- **Tone** (e.g., whimsical, serious, adventurous)

Additionally, users will have the option to extend stories, such as creating a series featuring the same protagonist. All stories and associated images will be stored in a searchable, persistent format to ensure easy access.

## Technologies and Tools
To bring this project to life, we have identified the following technologies and tools:

### Programming Languages and Frameworks
- **Python Flask/Django**: For backend development and API implementation.
- **HTML/CSS/JavaScript**: For building and styling the frontend.
- **React**: For creating a dynamic and user-friendly interface.

### AI and Machine Learning
- **OpenAI/Cohere/Ollama LLM**: For story generation.
- **DALL-E**: For generating representative story images.

### Storage and Databases
- **PostgreSQL**: To store stories and user-related data.
- **Firebase**: For authentication and web hosting.

### Additional Tools
- **SQLAlchemy**: To simplify database interactions through an ORM.
- **Docker**: To containerize the project for easy deployment and scalability.
- **Git/GitHub**: For version control and collaboration.

## Key Features
The application will provide the following features:

1. **User Authentication**
   - Users can log in with their accounts or use authenticators like Gmail.

2. **Story Customization**
   - Users can select the genre/theme for the story.
   - Users can define the number of characters, names, items, and places for the story.
   - Stories can be extended upon user request to create longer or sequential narratives.

3. **History Tab**
   - Users can access their previous story creations in a dedicated history section.

4. **Additional Features**
   - A FAQ or Tips tab for guidance.
   - Integration of AI-generated images to visually represent stories.

## Group Goals and Progress Plan
Our primary goals for this project are as follows:

1. **Core Functionality**
   - Implement story generation using LLMs.
   - Allow customizable parameters (genre, perspective, tone) for story creation.
   - Integrate image generation for stories.

2. **Persistent Storage**
   - Design and implement a database to store stories and their metadata.
   - Ensure stories and images are searchable and retrievable.

3. **User Experience**
   - Develop a user-friendly interface for creating, browsing, and managing stories.
   - Provide options for extending stories into series.

4. **Deployment and Testing**
   - Host the application on a cloud platform for accessibility.
   - Conduct thorough testing to ensure reliability and scalability.

### Progress Plan
We have divided the project timeline into the following phases and expect our tickets in our Sprints to follow these themes:

#### Phase 1: Research and Setup (Weeks 1-2)
- Research and select technologies.
- Set up development environments for backend, frontend, and database.
- Implement basic authentication and hosting with Firebase.

#### Phase 2: Core Features Implementation (Weeks 3-5)
- Develop the backend API to handle story generation requests and database operations.
- Build the frontend for user interactions (e.g., selecting genres, customizing stories).
- Integrate Cohere/Ollama for story generation.

#### Phase 3: Advanced Features and Testing (Weeks 6-8)
- Add support for image generation using Cloudflare Workers AI.
- Implement unit and integration tests to ensure reliability.

#### Phase 4: Deployment and Feedback (Weeks 9-10)
- Containerize the project using Docker for deployment.
- Deploy the application and gather user feedback for improvements.

#### Phase 5: Final Presentation (Week 13)
- Prepare documentation and project presentation materials.
- Demonstrate the application’s features and functionality.

---
#### Contributors | Group M
Nic Grounds: Mentor
Aksel Can Sozudogru: Sprint Master 1
Linh Ngo: Sprint Master 2
Nick Thompson: Sprint Master 3
Vincent Tran: Sprint Master 4
Julia Ketch: Product Owner


