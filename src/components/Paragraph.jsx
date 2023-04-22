import { useState } from "react";

function Paragraph() {
  const [text, setText] = useState("");
  const [paragraphs, setParagraphs] = useState([]);

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    setParagraphs([...paragraphs, text]);
    setText("");
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleClick}>Add Paragraph</button>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>
  );
}

export default Paragraph;
