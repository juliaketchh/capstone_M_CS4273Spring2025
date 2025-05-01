import React, { useState } from 'react';
import '../styles/generate.css';
import { generateStory } from '../api/StoryApi';

export default function StoryGenerate({ onClose, userId }) {
  const [character, setCharacter] = useState('');
  const [customName, setCustomName] = useState('');
  const [perspective, setPerspective] = useState('');
  const [customPerspective, setCustomPerspective] = useState('');
  const [plot, setPlot] = useState('');
  const [tone, setTone] = useState('');
  const [customTone, setCustomTone] = useState('');
  const [story, setStory] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setStory('');

    const characterName = character === 'other' ? customName : character;
    const storyTone = tone === 'other' ? customTone : tone;
    const storyPerspective = perspective === 'other' ? customPerspective : perspective;

    const storyData = {
      user_id: userId,
      genre: plot,
      perspective: storyPerspective,
      tone: storyTone,
      protagonist_name: characterName,
      word_count: 300,
    };

    try {
      const response = await generateStory(storyData);
      setStory(response.data.content);
    } catch (err) {
      setError('Failed to generate story. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="story-generate-container">
      <h1>AI Story Generator</h1>
      <form onSubmit={handleSubmit} className="story-form">

        {/* Character Selection */}
        <label htmlFor="character"><i className="fas fa-user"></i> Character:</label>
        <select
          id="character"
          value={character}
          onChange={(e) => setCharacter(e.target.value)}
          required
        >
          <option value="">Select a character</option>
          <option value="Mary">Mary</option>
          <option value="June">June</option>
          <option value="Harry">Harry</option>
          <option value="Big Boy">Big Boy</option>
          <option value="Spider Man">Spider Man</option>
          <option value="other">Other</option>
        </select>

        {character === 'other' && (
          <>
            <label htmlFor="customName">Character Name:</label>
            <input
              type="text"
              id="customName"
              value={customName}
              onChange={(e) => setCustomName(e.target.value)}
              placeholder="Enter character name"
              required
            />
          </>
        )}

        {/* Perspective */}
        <label htmlFor="perspective"><i className="fas fa-eye"></i> Perspective:</label>
        <select
          id="perspective"
          value={perspective}
          onChange={(e) => setPerspective(e.target.value)}
          required
        >
          <option value="">Select perspective</option>
          <option value="first-person">First-person</option>
          <option value="third-person">Third-person</option>
          <option value="omniscient">Omniscient</option>
          <option value="other">Other</option>
        </select>

        {perspective === 'other' && (
          <>
            <label htmlFor="customPerspective">Custom Perspective:</label>
            <input
              type="text"
              id="customPerspective"
              value={customPerspective}
              onChange={(e) => setCustomPerspective(e.target.value)}
              placeholder="Enter custom perspective"
              required
            />
          </>
        )}

        {/* Plot Type */}
        <label htmlFor="plot"><i className="fas fa-map"></i> Plot Type:</label>
        <select
          id="plot"
          value={plot}
          onChange={(e) => setPlot(e.target.value)}
          required
        >
          <option value="">Select a plot</option>
          <option value="adventure">Adventure</option>
          <option value="mystery">Mystery</option>
          <option value="romance">Romance</option>
          <option value="sci-fi">Sci-Fi</option>
        </select>

        {/* Tone */}
        <label htmlFor="tone"><i className="fas fa-music"></i> Tone:</label>
        <select
          id="tone"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
          required
        >
          <option value="">Select a tone</option>
          <option value="happy">Happy</option>
          <option value="dark">Dark</option>
          <option value="adventurous">Adventurous</option>
          <option value="mysterious">Mysterious</option>
          <option value="other">Other</option>
        </select>

        {tone === 'other' && (
          <>
            <label htmlFor="customTone">Custom Tone:</label>
            <input
              type="text"
              id="customTone"
              value={customTone}
              onChange={(e) => setCustomTone(e.target.value)}
              placeholder="Enter custom tone"
              required
            />
          </>
        )}

        <button type="submit" disabled={loading}>
        {loading ? (
    <>
      Generating...<i className="fa fa-spinner fa-pulse fa-fw"></i>
    </>
  ) : (
    'Generate Story'
  )}
        </button>
      </form>

      {error && <div className="error-message">{error}</div>}

      {story && (
        <div className="story-output">
          <p>{story}</p>
        </div>
      )}

      <button onClick={onClose} className="done-button"><i className="fas fa-home"></i> Done</button>
    </div>
  );
}
