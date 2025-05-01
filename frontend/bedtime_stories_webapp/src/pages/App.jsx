import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';
import '../styles/App.css';
import Header from '../components/Header';
import CharEdit from '../components/char_edit.jsx';
import StoryGenerate from '../components/generate.jsx';
import ReadView from '../components/read_view.jsx';
import Library from '../components/Library'

function App() {

  // 'menu'   = main menu
  // 'edit'   = character editor
  // 'library' = story library
  // 'generate' = story generator
  // 'read' = current open read
  const [selectedStoryId, setSelectedStoryId] = useState(null);
  const [storyData, setStoryData] = useState(null);
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

  useEffect(() => {
    if (view === 'read' && selectedStoryId) {
      fetch(`http://localhost:5000/api/story/${selectedStoryId}`)
        .then(res => res.json())
        .then(data => {
          if (data.status === 'success') {
            setStoryData(data.data); // data inside the story data 
          } else {
            console.error('Story fetch failed');
          }
        })
        .catch(err => {
          console.error('Failed to load story:', err);
          setStoryData({
            title: 'Error',
            content: 'There was a problem loading your story.'
          });
        });
    }
  }, [view, selectedStoryId]);
  


  return (
    <>
      <Header navigate={setView} setSelectedStoryId={setSelectedStoryId} />

      {view === 'menu' && (
        <MainMenu navigate={setView} setSelectedStoryId={setSelectedStoryId} />
      )}

      {view === 'edit' && (
        <CharEdit onClose={() => setView('menu')} />
      )}

      {view === 'library' && (
        <Library setView={setView} />
      )}

      {view === 'generate' && (
        <StoryGenerate onClose={() => setView('menu')} userId={userId} />
      )}

      {view === 'read' && storyData && (
        <ReadView
          title={storyData.title}
          content={storyData.content}
          onClose={() => {
            setView('menu');
            setStoryData(null);
            setSelectedStoryId(null);
          }}
        />
      )}

      {view === 'read' && storyData && (
        <ReadView
          title={storyData.title}
          content={storyData.content}
          onClose={() => {
            setView('menu');
            setStoryData(null);
            setSelectedStoryId(null);
          }}
        />
      )}
    </>
  );
}

function MainMenu({ navigate, setSelectedStoryId }) {
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

        <div className="divider" />

        <button className="button" onClick={() => {
          setSelectedStoryId(1); //TODO
          navigate('read');
        }}>
          Open current Read
        </button>
      </div>
    </>
  );
}

export default App;