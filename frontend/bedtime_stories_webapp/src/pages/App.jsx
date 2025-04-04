import { useState } from 'react'
import '../styles/App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>User's Bedtime Stories</h1>
      <div className="card">
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
