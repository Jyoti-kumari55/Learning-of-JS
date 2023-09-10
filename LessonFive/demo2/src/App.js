import './App.css';
import React, { useState } from "react";


var emojiDict = {
  "😃": "Smiley",
  "😆": "Laughing",
  "😅": "Sweat smile",
  "😉": "Wink",
  "😊": "Blush",
  "😇": "Innocent",
  "😍": "Heart eyes",
  "😋": "Yum",
  "🤔": "Thinking face"
};

function App() {

  const [inputEmoji, setInputEmoji] = useState(" ");

  function emojiChangeHandler(event) {
    var userInput = event.target.value;
    var emojiMean = emojiDict[userInput];

    if (emojiMean === undefined) {
      emojiMean = " We don't define this emoji in our database!!😞";
    }
    setInputEmoji(emojiMean);
  }
  return (
    <div className="App">
       <h1>
       Emoji </h1>
      <input
      className='input-text'
       placeholder='Put your emoji....'
       onChange={emojiChangeHandler}
      />
      <h2 > {inputEmoji} </h2>
    </div>
  );
}

export default App;
