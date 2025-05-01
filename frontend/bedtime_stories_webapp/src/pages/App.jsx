import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import { getUserStories } from '../api/StoryApi';
import '../styles/App.css';
import Header from '../components/Header';
import CharEdit from '../components/char_edit.jsx';
import StoryGenerate from '../components/generate.jsx';
import ReadView from '../components/ReadView.jsx';
import Library from '../components/Library';

function App() {
  const [view, setView] = useState('menu');
  const [userId, setUserId] = useState(null);
  const [stories, setStories] = useState([]);
  const [selectedStory, setSelectedStory] = useState(null);
  const navigate = useNavigate();

  const fetchStories = async (userId) => {
    try {
      const response = await getUserStories(userId);
      setStories(response.data);
    } catch (error) {
      console.error('Failed to fetch user stories:', error);
    }
  };

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUserId(user.uid); // Set the Firebase user ID
        await fetchStories(user.uid); // Fetch stories for the authenticated user
      } else {
        navigate('/login'); // Redirect to login if not authenticated
      }
    });

    return () => unsubscribe(); // Cleanup the listener on unmount
  }, [navigate]);

  const handleStoryClick = (story) => {
    setSelectedStory(story);
    setView('read');
  };

  const handleStoryGenerated = async () => {
    if (userId) {
      await fetchStories(userId); // Fetch stories again after a new story is generated
    }
    setView('menu');
  };

  const handleNavigateToLibrary = async () => {
    if (userId) {
      await fetchStories(userId); // Fetch stories again when navigating to the library
    }
    setView('library');
  };

  return (
    <>
      <Header navigate={setView} stories={stories} setSelectedStory={setSelectedStory} />

      {view === 'menu' && <MainMenu navigate={setView} onNavigateToLibrary={handleNavigateToLibrary} />}

      {view === 'edit' && <CharEdit onClose={() => setView('menu')} />}

      {view === 'library' && (
        <Library
          stories={stories}
          onStoryClick={handleStoryClick}
          onClose={() => setView('menu')}
        />
      )}

      {view === 'generate' && (
        <StoryGenerate onClose={handleStoryGenerated} userId={userId} />
      )}

      {view === 'read' && selectedStory && (
        <ReadView
          story={selectedStory}
          onClose={() => {
            setView('menu');
            setSelectedStory(null);
          }}
        />
      )}
    </>
  );
}

function MainMenu({ navigate, onNavigateToLibrary }) {
  return (
    <>
      <h1>User&#39;s Bedtime Stories</h1>

      <div className="card">
        <div className="divider" />

        <button className="button" onClick={() => navigate('edit')}>
        <i className="fas fa-users"></i> Character Editor
        </button>

        <div className="divider" />

        <button className="button" onClick={onNavigateToLibrary}>
        <i className="fas fa-book"></i> Story Library
        </button>

        <div className="divider" />

        <button className="button" onClick={() => navigate('generate')}>
        <i className="fas fa-pencil-alt"></i> Generate Story
        </button>
      </div>
    </>
  );
}

export default App;