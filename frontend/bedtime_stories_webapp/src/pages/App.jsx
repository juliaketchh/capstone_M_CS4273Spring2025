import { useState } from 'react'
import '../styles/App.css'
import Header from '../components/Header'
import CharEdit from '../components/char_edit.jsx';
import StoryLibrary from '../components/library.jsx';
import StoryGenerate from '../components/generate.jsx';

function App() {
  // 'menu'   = main menu
  // 'edit'   = character editor
  // 'library' = story library
  // 'generate' = story generator
  const [view, setView] = useState('menu');

  // Decide what to render based on the current view
  switch (view) {
    case 'edit':
      return (
        <>
          <Header />
          <CharEdit onClose={() => setView('menu')} />
        </>
      );

    case 'library':
      return (
        <>
          <Header />
          <StoryLibrary onClose={() => setView('menu')} />
        </>
      );

    case 'generate':
      return (
        <>
          <Header />
          <StoryGenerate onClose={() => setView('menu')} />
        </>
      );

    default: // 'menu'
      return (
        <>
          <Header />

          <h1>User&#39;s Bedtime Stories</h1>

          <div className="card">
            <div className="divider" />

            <button
              className="button"
              onClick={() => setView('edit')}
            >
              Character Editor
            </button>

            <div className="divider" />

            <button
              className="button"
              onClick={() => setView('library')}
            >
              Story Library
            </button>

            <div className="divider" />

            <button
              className="button"
              onClick={() => setView('generate')}
            >
              Generate Story
            </button>
          </div>
        </>
      );
  }
}

export default App;