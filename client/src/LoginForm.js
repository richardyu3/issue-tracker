import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid gray;
  color: gray;
  font-size: 16px;
  margin: 0 1em;
  padding: 0.60em 1.35em;
  cursor: pointer;

  &:hover {
    border: 2px solid black;
    color: black;
  }
`
function LoginForm({setRenderIssueTracker}) {

  const handleSubmit = (event) => {
    event.preventDefault();
    setRenderIssueTracker(false);
  }

    return (
      <form onSubmit={handleSubmit}>
        <label>Username </label>
        <input /><br /><br />
        <label>Password </label>
        <input /><br /><br />
        <StyledButton>Submit</StyledButton>
      </form>
    )
}

export default LoginForm;