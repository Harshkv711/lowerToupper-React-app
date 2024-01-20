import React, { useState } from 'react';

export default function Texform(props) {
  const [text, setText] = useState('enter the text here');

  const handleInputChange = (event) => {
    const enteredText = event.target.value;
    setText(enteredText);
  };

  const handleConvertToUppercase = () => {
    setText(text.toUpperCase());
  };

  return (
    <div>
      <h1>
        {props.heading} 
      </h1>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Enter the text to analyze below
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          value={text}
          onChange={handleInputChange}
        />
      </div>

      <button type="button" className="btn btn-primary" onClick={handleConvertToUppercase}>
        Convert to uppercase
      </button>
    </div>
  );
}
