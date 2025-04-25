import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import '../styles/App.css';
import Header from '../components/Header';
import CharEdit from '../components/char_edit.jsx';
import StoryLibrary from '../components/library.jsx';
import StoryGenerate from '../components/generate.jsx';

function App() {
  const [view, setView] = useState('menu');
  const [userId, setUserId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(user.uid); // Set the Firebase user ID
      } else {
        navigate('/login'); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, [navigate]);

  return (
    <>
      <Header navigate={setView} />

      {view === 'menu' && <MainMenu navigate={setView} />}
      {view === 'edit' && <CharEdit onClose={() => setView('menu')} />}
      {view === 'library' && <StoryLibrary onClose={() => setView('menu')} />}
      {view === 'generate' && (
        <StoryGenerate onClose={() => setView('menu')} userId={userId} />
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