import React, {useState} from 'react';

const Demo02 = () => {

 var [input, setInput] = useState(" ");

 function inputChangeHandler(event){
    var data = console.log(event.target.value);
    setInput(data);
 }

  return (
    <div>
      <h1>Message</h1>
      <input onChange={ inputChangeHandler } />
      <h1> {input}</h1> 
    </div>
  )
}

export default Demo02;
