const API_BASE_URL = "http://localhost:5000/api/story";

export const generateStory = async (storyData) => {
  try {
    console.log("Generating story with data:", storyData);
    const response = await fetch(`${API_BASE_URL}/generate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(storyData),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.status} - ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to generate story:", error);
    throw error;
  }
};