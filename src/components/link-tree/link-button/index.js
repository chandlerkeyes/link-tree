import React from 'react';

function LinkButton(props) {
  return (
    <a href={props.link} target='_blank' rel="noopener noreferrer">
        <button>{props.text}</button>
    </a>
  );
}

export default LinkButton;
