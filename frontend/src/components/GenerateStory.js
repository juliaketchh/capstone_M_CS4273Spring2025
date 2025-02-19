import { useState } from "react";
import "./styles.css";

function GenerateStory({ onSubmit }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (prompt.trim()) {
      onSubmit(prompt);
      setPrompt("");
    }
  };

  return (
    <div className="story-input">
      <h2>Enter Your Story Prompt:</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Once upon a time..."
        />
        <button type="submit">Generate Story</button>
      </form>
    </div>
  );
}

export default GenerateStory;
