import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Tracker() {

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get('/posts')
      .then(function (response) {
        console.log(response);
        setPosts(response);
      })
      .catch(function (error) {
        console.log(error);
      })
      .then(function () {

    });
  })
  return (
    <div>
      <h2 class='trackerTitle'>Issue Tracker for Project ABC</h2>
      <table class='trackerTable'>
        <th>Issue Type</th>
        <th>Priority</th>
        <th>Summary</th>
        <th>Status</th>
        <th>Assigned To</th>
        <th>Update Status</th>
      </table>
    </div>
  )
}

export default Tracker;