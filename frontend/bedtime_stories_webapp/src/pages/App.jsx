import { useState } from 'react'
import '../styles/App.css'
import Header from '../components/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header /> {/* This part adds new header */}
      
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
          Generate Story
        </button>
      </div>

    </>
  )
}

export default App
