import { useState, useEffect } from "react";
import { auth } from "../firebaseConfig";
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "../styles/App.css"; 

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // If user is already logged in, redirect to app
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/app");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const handleSignUp = async () => {
    setError("");
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/app");
    } catch (err) {
      handleAuthError(err);
    }
  };

  const handleLogin = async () => {
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/app");
    } catch (err) {
      handleAuthError(err);
    }
  };

  const handleAuthError = (err) => {
    if (err.code === "auth/user-not-found") {
      setError("No account found with that email.");
    } else if (err.code === "auth/wrong-password") {
      setError("Incorrect password.");
    } else if (err.code === "auth/invalid-email") {
      setError("Invalid email address.");
    } else if (err.code === "auth/email-already-in-use") {
      setError("Email is already in use. Try logging in.");
    } else if (err.code === "auth/weak-password") {
      setError("Password should be at least 6 characters.");
    } else {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login or Sign Up</h2>
      <div classname= "email">
        <span class="auth-container-addon"><i class="fa fa-envelope fa-fw "></i> </span>
        <input
          class="form-control"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div classname= "email">
        <span class="auth-container-addon"><i class="fa fa-key fa-fw"></i> </span>
        <input
          class="form-control"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button onClick={handleLogin}><i class="fa fa-sign-in-alt" aria-hidden="true"></i> Login</button>
      <button onClick={handleSignUp}><i class="fa fa-user-plus" aria-hidden="true"></i> Sign Up</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default Login;
