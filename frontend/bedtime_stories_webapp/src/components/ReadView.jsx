import '../styles/ReadView.css';

export default function ReadView({ story, onClose }) {
  return (
    <div className="read-view-container">
      <h2 className="story-title">{story.title}</h2>
      <div className="story-content">{story.content}</div>
      <button className="done-button" onClick={onClose}>Done</button>
    </div>
  );
}
