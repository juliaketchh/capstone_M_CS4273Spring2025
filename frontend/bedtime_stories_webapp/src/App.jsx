import { useState } from 'react'
import './App.css'
import Library from './pages/Library'

function App() {
  const [count, setCount] = useState(0)
  const [view, setView] = useState('home')

  if (view === 'home') {
    return (
      <>
        <h1>Bedtime Stories</h1>
        <p>
          <button onClick={() => setView('library')}>Library</button>
        </p>
      </>
    )
  }

  if (view === 'library') {
    return <Library />
  }

  return (
    <>
      <h1>User's Bedtime Stories</h1>
      <div className="card">
      <a href="library.html" class="button">Story Library</a>
        <div class="divider"/>
        <button class="button"> 
          Character Editor
        </button>
        <div class="divider"/>
        <button class="button"> 
          Story Settings
        </button>
        <div class="divider"/>
        <button class="button"> 
        <a href="generate_story.html" class="button">Generate Story</a>
        </button>
      </div>

    </>
  )
}

export default App
