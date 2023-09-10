import './App.css';
import React, {useState} from "react";


var headingText = "Jyoti Chaudhary";
var username = "Welcome! " + headingText;

function App() {

  const [counter, setCounter] = useState(0);
  function clickHandler() {
    var newCounter = counter + 1; //counter increases
    setCounter(newCounter);
  }
  console.log(" Button Clicked... ", counter);

  return (
    <div className="App">
    <button className = "btn" onClick={clickHandler}>
      Click Me!
    </button>
    <h1 style={{ backgroundColor: "green", fontSize: "4.5ch" }}>
    Jyoti chaudhary </h1>
    {/* {username} */}
    <h2  >{counter}</h2>

    </div>
  );
}

export default App;
