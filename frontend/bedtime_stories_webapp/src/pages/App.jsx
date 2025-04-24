import { useState } from 'react'
import '../styles/App.css'
import Header from '../components/Header'
import CharEdit from '../components/char_edit.jsx';
import StoryGenerate from '../components/generate.jsx';
import Library from '../components/Library'

function App() {
  // 'menu'   = main menu
  // 'edit'   = character editor
  // 'library' = story library
  // 'generate' = story generator
  const [view, setView] = useState('menu');

  return (
    <>
      <Header navigate={setView} />

      {view === 'menu' && (
        <MainMenu navigate={setView} />
      )}

      {view === 'edit'     && (
        <CharEdit onClose={() => setView('menu')} />
      )}

      {view === 'library' && (
        <Library setView={setView} />
      )}

      {view === 'generate' && (
        <StoryGenerate onClose={() => setView('menu')} />
      )}
    </>
  );
}

function MainMenu({ navigate }) {
  return (
    <>
      <h1>User&#39;s Bedtime Stories</h1>

      <div className="card">
        <div className="divider" />

        <button className="button" onClick={() => navigate('edit')}>
          Character Editor
        </button>

        <div className="divider" />

        <button className="button" onClick={() => navigate('library')}>
          Story Library
        </button>

        <div className="divider" />

        <button className="button" onClick={() => navigate('generate')}>
          Generate Story
        </button>
      </div>
    </>
  );
}


export default App;