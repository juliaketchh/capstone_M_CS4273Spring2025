import { useState } from 'react'
// import { useEffect } from 'react'; when connecting to api
import '../styles/App.css'
import Header from '../components/Header'
import CharEdit from '../components/char_edit.jsx';
import StoryGenerate from '../components/generate.jsx';
import ReadView from '../components/read_view.jsx';
import Library from '../components/Library'
import ReadView from '../components/read_view.jsx';

function App() {

  // const [storyData, setStoryData] = useState(null); when connecting to api for read

  // 'menu'   = main menu
  // 'edit'   = character editor
  // 'library' = story library
  // 'generate' = story generator
  // 'read' = current open read
  const [view, setView] = useState('menu');

      // this is for when we connect it to backend api
      // useEffect(() => {
      //   if (view === 'read') {
      //     fetch('/api/stories/current') // api path i need
      //       .then(res => res.json())
      //       .then(data => setStoryData(data))
      //       .catch(err => {
      //         console.error('Failed to load story:', err);
      //         setStoryData({
      //           title: 'Error',
      //           content: 'There was a problem loading your story.'
      //         });
      //       });
      //   }
      // }, [view]);


  return (
    <>
      <Header navigate={setView} />

      {view === 'menu' && (
        <MainMenu navigate={setView} />
      )}

      {view === 'edit' && (
        <CharEdit onClose={() => setView('menu')} />
      )}

      {view === 'library' && (
        <Library setView={setView} />
      )}

      {view === 'generate' && (
        <StoryGenerate onClose={() => setView('menu')} />
      )}

      {view === 'read' && ( //storyData && put this in when there is story data
        <ReadView
          title= "Title Here" //{storyData.title}
          content= "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id. Pretium tellus duis convallis tempus leo eu aenean. Urna tempor pulvinar vivamus fringilla lacus nec metus. Iaculis massa nisl malesuada lacinia integer nunc posuere. Semper vel class aptent taciti sociosqu ad litora. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Dis parturient montes nascetur ridiculus mus donec rhoncus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Purus est efficitur laoreet mauris pharetra vestibulum fusce."   //{storyData.content}
          onClose={() => setView('menu')}
        />
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

        <div className="divider" />

        <button className="button" onClick={() => navigate('read')}>
          Open Current Read
        </button>
      </div>
    </>
  );
}


export default App;