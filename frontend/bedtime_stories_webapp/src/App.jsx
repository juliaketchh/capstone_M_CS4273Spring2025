import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
<<<<<<< HEAD
          Story Settings
=======
        <a href="generate_story.html" class="button">Generate Story</a>
>>>>>>> fdb050a (Updated App.jsx and added library.html new1)
        </button>
      </div>

    </>
  )
}

export default App
