import './App.css';
import React, {useState} from "react";

var musicList = {
  Rock: [
  { song: "Angry", singer: "The Rolling stones" },
  { song: "Horizon", singer: "Saliva" },
  { song: "Street Rat", singer: "Blondshell" },
  { song: "Lock your Horns", singer: "Rewa" },
  { song: "Love is Embrassing", singer: "Olivia Rodrigo" }
],

Classical: [
  { song: "Embrace Me", singer: "Carin Florie" },
  { song: "Air from Air", singer: "Yasuo Zen" },
  { song: "Wings", singer: "Nel Swerts" },
  { song: "Light of Wintertime", singer: "Josephe Burke" },
  { song: "Sun sinking at dusk", singer: "Moemi Lucas" }
],

HipHop: [
  { song: "Cheques", singer: "Shubh" },
  { song: "Money", singer: "Lisa" },
  { song: "My Heart Goes", singer: "Becky Hill" },
  { song: "Astronaut In The Ocean", singer: "Masked Wolf" },
  { song: "Ambition for Crush", singer: "Key Glock" }
],

Hindi: [
  { song: "Heeriye", singer: "Arjit Singh" },
  { song: "Mahiye Jinha Sohna", singer: "Darshan Raval" },
  { song: "Phir Aur Kya Chahiye", singer: "Sachin Jigar" },
  { song: "Zihal-e-Miskin", singer: "Shreya Ghosal" },
  { song: "Yaar Ka Sataya hua Hai", singer: "B Praak" }
],

Devotional: [
  { song: "Shree Hanuman Chalisa", singer: "Hariharan" },
  { song: "Om Jai Jagdish Hare", singer: "Lata Mangeshkar" },
  { song: "Achutam Keshvam", singer: "Vikram Haza" },
  { song: "Mere Ghar Ram Aaye Hai", singer: "Jubin Nautiyal" },
  { song: "Har Har Shambhu", singer: "Jeetu Sharma" }
 ]

};

var  musics = Object.keys(musicList);

function App() {

  var [inputMusic, setInputMusic] = useState("Rock");

  function musicClickHandler(inputMusic){
    setInputMusic(inputMusic);

  }

  return (
    <div className="App">
    <h1>
      <span role='img' aria-label='musicAlbum'>
      🎵
      </span>
      { " " }
      My Favourite Music
    </h1>

    <p> Let's explore my music list...</p>

    { musics.map((inputMusic) => {
      return (
        <button 
        onClick={() => musicClickHandler(inputMusic)}
        key={inputMusic}
        className='music-btn'
       >
        {inputMusic}

        </button>
      );
    })}
    <hr/>

    <ul>
      {
        musicList[inputMusic].map((songs) => {
          return (
              <li
                key={songs.song}
                >
                  <div className='con'>
                  {songs.song} 
                  </div>
                  <div className='con' >
                    Singer: {songs.singer}

                  </div>
                </li>  
          )
        })
      }
    </ul>
    </div>
  );
}

export default App;