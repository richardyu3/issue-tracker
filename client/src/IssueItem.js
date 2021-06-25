import React from 'react';

function IssueItem({item}) {
  return (
    <tr>
      <td>{item['issue_type']}</td>
      <td>{item['priority']}</td>
      <td>{item['summary']}</td>
      <td>{item['status']}</td>
      <td>{item['assigned_to']}</td>
    </tr>
  )
}

export default IssueItem;