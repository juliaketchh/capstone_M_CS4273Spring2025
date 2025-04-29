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

export const getUserStories = async (userId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/user/${userId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch user stories");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching user stories:", error);
    throw error;
  }
};

export const getStoryById = async (storyId) => {
  try {
    const response = await fetch(`${API_BASE_URL}/${storyId}`);
    if (!response.ok) {
      throw new Error("Failed to fetch story by ID");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching story by ID:", error);
    throw error;
  }
};

export const getAllStories = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}`);
    if (!response.ok) {
      throw new Error("Failed to fetch all stories");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching all stories:", error);
    throw error;
  }
};