// import logo from './logo.svg';
// import './App.css';
import LoginForm from './LoginForm';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Tracker from './Tracker';
import axios from 'axios';

function App() {
  const [renderIssueTracker, setRenderIssueTracker] = useState(true);
  // const firstRender = useRef(true);

  const [issues, setIssues] = useState([]);

  useEffect(() => {
    getIssues();
  }, []);

  const getIssues = () => {
    axios.get('/issues')
      .then(function (response) {
        console.log(response['data']);
        setIssues(response['data']);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {

    });
  };

  const addIssue = (issueToAdd) => {
    axios.post('/issues', {
      issue_type: issueToAdd.issue_type,
      priority: issueToAdd.priority,
      summary: issueToAdd.summary,
      status: issueToAdd.status,
      assigned_to: issueToAdd.assigned_to
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  let stuff;
  if (renderIssueTracker) {
      stuff =
      <div className="App">
        <h1>Issue Tracker</h1>
        <h2>Login</h2>
        <LoginForm setRenderIssueTracker={setRenderIssueTracker} />
      </div>
  } else {
    stuff = <Tracker issues={issues} addIssue={addIssue}/>
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