import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>User's Bedtime Stories</h1>
      <div className="card">
      <button class="button"> 
          Story Library
        </button>
        <div class="divider"/>
        <button class="button"> 
          Character Editor
        </button>
        <div class="divider"/>
        <button class="button"> 
          Story Settings
        </button>
      </div>

    </>
  )
}

export default App
