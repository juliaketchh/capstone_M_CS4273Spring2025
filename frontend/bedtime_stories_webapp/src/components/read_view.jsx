import '../styles/read_view.css';

export default function ReadView({ title = "Current Story", content = "Once upon a time...", onClose }) {
  return (
    <div className="read-view-container">
      <h2 className="story-title">{title}</h2>
      <div className="story-content">{content}</div>
      <button className="done-button" onClick={onClose}>Done</button>
    </div>
  );
}
