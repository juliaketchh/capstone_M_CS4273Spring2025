import { useState } from "react";

export default function CharEdit({ onClose }) {
  const [characterName, setCharacterName] = useState("");
  const [characters, setCharacters] = useState([]);

  const handleAdd = () => {
    if (characterName.trim() === "") return;
    setCharacters(prev => [...prev, characterName.trim()]);
    setCharacterName("");
  };

  const handleDelete = (index) => {
    const updated = [...characters];
    updated.splice(index, 1);
    setCharacters(updated);
  };

  return (
    <div className="char-editor">
      <h2>Edit Your Characters</h2>

      <input
        type="text"
        placeholder="Enter character name"
        value={characterName}
        onChange={(e) => setCharacterName(e.target.value)}
      />
      <button onClick={handleAdd}>Add Character</button>

      <ul>
        {characters.map((char, index) => (
          <li key={index}>
            {char}
            <button onClick={() => handleDelete(index)}>❌</button>
          </li>
        ))}
      </ul>

      <button onClick={onClose}>Done</button>
    </div>
  );
}
