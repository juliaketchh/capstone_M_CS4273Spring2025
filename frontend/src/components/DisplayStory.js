import "./styles.css";

function DisplayStory({ story }) {
  return (
    <div className="story-display">
      <h2>Your AI-Generated Story:</h2>
      <p>{story ? story : "Your story will appear here..."}</p>
    </div>
  );
}

export default DisplayStory;
