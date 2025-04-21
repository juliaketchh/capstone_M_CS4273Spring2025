import React, { useState } from 'react';
import '../styles/generate.css';

export default function StoryGenerate({ onClose }) {
  const [name, setName] = useState('');
  const [customName, setCustomName] = useState('');
  const [character, setCharacter] = useState('');
  const [perspective, setPerspective] = useState('');
  const [customPerspective, setCustomPerspective] = useState('');
  const [plot, setPlot] = useState('');
  const [tone, setTone] = useState('');
  const [customTone, setCustomTone] = useState('');
  const [story, setStory] = useState('');

  const generateStory = (name, tone, plot) => {
    const stories = {
      adventure: `${name} embarks on an exciting journey in a ${tone} world, where they face numerous challenges and make new friends.`,
      mystery: `${name} arrives at a ${tone} place filled with secrets. As they investigate, they uncover hidden truths about the area.`,
      romance: `${name} meets someone special in a ${tone} setting, and together they experience a whirlwind romance full of unexpected twists.`,
      'sci-fi': `${name} travels to a ${tone} futuristic world full of advanced technology, where they must save the planet from an impending threat.`,
    };

    return stories[plot];
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const characterName = character === 'other' ? customName : character;
    const storyTone = tone === 'other' ? customTone : tone;
    const generatedStory = generateStory(characterName, storyTone, plot);
    setStory(generatedStory);
  };

  return (
    <div className="story-generate-container">
      <h1>AI Story Generator</h1>
      <form onSubmit={handleSubmit} className="story-form">

        {/* Character Selection */}
        <label htmlFor="character">Character:</label>
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
        <label htmlFor="perspective">Perspective:</label>
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
        <label htmlFor="plot">Plot Type:</label>
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
        <label htmlFor="tone">Tone:</label>
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

        <button type="submit">Generate Story</button>
      </form>

      {story && (
        <div className="story-output">
          <p>{story}</p>
        </div>
      )}

      <button onClick={onClose} className="done-button">Done</button>
    </div>
  );
}
