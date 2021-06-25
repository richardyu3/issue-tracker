import React, { useState, useEffect } from 'react';
import axios from 'axios';
import IssueItem from './IssueItem';
import Modal from './Modal';

function Tracker({issues, addIssue}) {

  const [isOpen, setIsOpen] = useState(false);
  // const [issueToAdd, setIssueToAdd] = useState([]);
  const [issueType, setIssueType] = useState('');
  const [priority, setPriority] = useState('');
  const [summary, setSummary] = useState('');
  const [status, setStatus] = useState('');
  const [assignedTo, setAssignedTo] = useState('');

  const changeHandler = (event) => {
    if (event.target.name === 'issueType') {
      setIssueType(event.target.value);
    } else if (event.target.name === 'priority') {
      setPriority(event.target.value);
    } else if (event.target.name === 'summary') {
      setSummary(event.target.value);
    } else if (event.target.name === 'status') {
      setStatus(event.target.value);
    } else if (event.target.name === 'assignedTo') {
      setAssignedTo(event.target.value);
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    addIssue({issueType: issueType, priority: priority,
      summary: summary, status, status, assignedTo: assignedTo});
  }
  return (
    <div>
      <h2 className='trackerTitle'>Issue Tracker for Project ABC</h2>
      {/* <form onSubmit={() => {setIsOpen(true)}}> */}
      <button onClick={() => setIsOpen(true)}>Add Issue</button>
      {/* </form> */}
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <form onSubmit={() => {addIssue}}>
          <label>Issue Type</label>
          <input name="issueType" onChange={changeHandler}></input>

          <label>Issue Type</label>
          <input name="priority" onChange={changeHandler}></input>

          <label>Issue Type</label>
          <input name="summary" onChange={changeHandler}></input>

          <label>Issue Type</label>
          <input name="status" onChange={changeHandler}></input>

          <label>Issue Type</label>
          <input name="assignedTo" onChange={changeHandler}></input>
        </form>
      </Modal>

      <table className='trackerTable'>
        <tr>
          <th>Issue Type</th>
          <th>Priority</th>
          <th>Summary</th>
          <th>Status</th>
          <th>Assigned To</th>
          <th>Update Status</th>
        </tr>


          {issues.map(item => (
            <IssueItem item={item} />
          ))}
          <td>Update Issue Status</td>

      </table>
    </div>
  )
}

export default Tracker;