import './App.css';
import { useState } from 'react';

var emojiDict = {
  "🐜": "Ant",
    "🌹": "Rose",
    "❤️‍🔥": "Heart on Fire",
    "🐧": "Penguin",
    "💓": "Beating Heart",
    "👻": "Ghost",
    "🙏": "Folded Hands",
    "🍫": "Choclate",
    "😊": "Blush",
    "😇": "Innocent",
    "😍": "Heart eyes",
    "😋": "Yum",
    "🤔": "Thinking face"
}

var emojis = Object.keys(emojiDict); //Converting object to array

function App() {

  var [inputEmoji, setInputEmoji] = useState(" ");
  var [emojiMean, setEmojiMean] = useState(" ");

  function emojiChangeHandler(event) {
    var inputIcon = event.target.value;
    setInputEmoji(inputIcon);

    if (inputIcon in emojiDict) {
      setEmojiMean(emojiDict[inputIcon]);
    } else {
      setEmojiMean("Sorry!!This Emoji is not in our database....");
    }
  }

  function emojiClickHandler(inputIcon){
    setEmojiMean(emojiDict[inputIcon]);
  }

  return (
    <div className="App">
        <h1>Your Favourite Emoji</h1>
      <input 
      className='input-text'
      placeholder="Put your emoji here......"  
      onChange={emojiChangeHandler} />

      <h1> {inputEmoji} </h1>
      <h1> {emojiMean}</h1>

      {
        emojis.map((inputEmoji) => (
          <span onClick={() => 
          emojiClickHandler(inputEmoji)}>
          {" "}
          {inputEmoji}
          {" "}
          </span>
        ))
      };
    </div>
  );
}

export default App;
