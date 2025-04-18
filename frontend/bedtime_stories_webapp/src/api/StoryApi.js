const API_BASE_URL = "http://localhost:5000/api/story";

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