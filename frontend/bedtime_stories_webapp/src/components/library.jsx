import React from "react";
import CustomCarousel from "./Carousel";
import AllStories from "./AllStoriesMantine";

export default function Library({ stories, onStoryClick, onClose }) {
  if (!stories || stories.length === 0) {
    return (
      <div>
        <h1>Library</h1>
        <p>No stories available.</p>
        <button onClick={onClose}>Back to Menu</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Library</h1>
      <CustomCarousel items={stories} setActiveStory={onStoryClick} />
      <AllStories stories={stories} setActiveStory={onStoryClick} />
      <button onClick={onClose}>Back to Menu</button>
    </div>
  );
}