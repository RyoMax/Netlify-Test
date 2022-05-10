import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from "React"

function App() {
  const [message, setMessage] = useState("")
  useEffect(() => {
    fetch("https://heroku-test-app-wd-matrix.herokuapp.com/")
    .then(response => {
      return (response.ok ? response.json(): "fuck you, not working!")
    })
    .then(data => {
      setMessage(data)
    })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Is the shit working?</p>
        <p>Answer:</p>
        <p>{message}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
