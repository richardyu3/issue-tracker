import logo from './logo.svg';
import './App.css';
import LoginForm from './LoginForm';
import React, { useState } from 'react';
import styled from 'styled-components';
import Tracker from './Tracker';

function App() {
  const [renderIssueTracker, setRenderIssueTracker] = useState(true);

  let stuff;
  if (renderIssueTracker) {
      stuff =
      <div className="App">
        <h1>Issue Tracker</h1>
        <h2>Login</h2>
        <LoginForm setRenderIssueTracker={setRenderIssueTracker} />
      </div>
  } else {
    stuff = <Tracker />
  }
  return (
    <div>
      {stuff}
    </div>
  )
}

export default App;


 {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}