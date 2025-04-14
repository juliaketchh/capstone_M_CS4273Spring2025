import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [userData, setUserData] = useState(null);

  const login = async () => {
    try {
      const userCred = await signInWithEmailAndPassword(auth, email, pass);
      const token = await userCred.user.getIdToken();

      const res = await fetch('http://localhost:3000/dashboard', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      setUserData(data);
    } catch (err) {
      console.error('Login error:', err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>User's Bedtime Stories</h1>

      {!userData ? (
        <>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          /><br />
          <input
            placeholder="Password"
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          /><br />
          <button onClick={login}>Login</button>
        </>
      ) : (
        <>
          <div className="card">
            <div className="divider" />
            <button className="button">
              Character Editor
            </button>
            <div className="divider" />
            <button className="button">
              Story Settings
            </button>
            <div className="divider" />
            <a href="generate_story.html" className="button">
              Generate Story
            </a>
          </div>
          <pre>{JSON.stringify(userData, null, 2)}</pre>
        </>
      )}
    </div>
  );
}

export default App;

