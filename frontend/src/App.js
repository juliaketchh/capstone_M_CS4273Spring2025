import { useState } from "react";
import GenerateStory from "./components/GenerateStory";
import DisplayStory from "./components/DisplayStory";
import "./components/styles.css";


function App() {
  const [story, setStory] = useState("");

  const generateStory = (prompt) => {
    // Replace with actual AI API call in the future
    setStory(`Once upon a time... (Generated from: "${prompt}")`);
  };

  return (
    <div>
      <h1>AI Bedtime Stories</h1>
      <GenerateStory onSubmit={generateStory} />
      <DisplayStory story={story} />
    </div>
  );
}

export default App;
