import React from 'react';

function LinkButton(props) {
  return (
    <a href={props.link} target='_blank'>
        <button>{props.text}</button>
    </a>
  );
}

export default LinkButton;
