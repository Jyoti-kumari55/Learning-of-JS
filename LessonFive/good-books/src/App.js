import React, { useState } from "react";
import './App.css';

var novelList = {
  Romantic: [
    {
      name: "Call Me By Your Name",
      writer: "Andre Aciman",
      publishedDate: "2007"
    },
    {
      name: "People We Meet on Vacation",
      writer: "Emily Henry",
      publishedDate: "2021"
    },
    {
      name: "The Bromance Book Club",
      writer: "Lyssa Kay Adams",
      publishedDate: "2019"
    },
    {
      name: "Love in the Time of Serial Killers",
      writer: "Alicia Thompson",
      publishedDate: "2022"
    }
  ],
  Horror: [
    {
      name: "The Haunting of Hill House",
      writer: "Shirley Jackson",
      publishedDate: "1959"
    },

    {
      name: "It",
      writer: "Stephen King",
      publishedDate: "1977"
    },

    {
      name: "Something Wicked This Way Comes",
      writer: "Ray Bradbury",
      publishedDate: "1962"
    },

    {
      name: "House of Leaves",
      writer: "Mark Z.Danielewski",
      publishedDate: "2000"
    }
  ],

  Science: [
    {
      name: "The Hitchhiker's Guide to the Galaxy",
      writer: "Douglas Adams",
      publishedDate: "1979"
    },

    {
      name: "Neumancer",
      writer: "William Gibson",
      publishedDate: "1984"
    },

    {
      name: "Do Androids Dream of Electric Sheep",
      writer: "Philip K. Dick",
      publishedDate: "19686"
    },

    {
      name: "The Three-Body Problem",
      writer: "Liu Cixin",
      publishedDate: "2008"
    }
  ]
};

var books = Object.keys(novelList);

function App() {

  var [novel, setNovel] = useState("Science");
  function novelClickHandler(novel) {
    setNovel(novel);
  }

  return (
    <div className="App">
      <h1 style={{ fontSize: "3rem" }}>
        <span role="img">📚</span> Novels
      </h1>
      <p
        style={{
          fontSize: "1.5rem",
          marginLeft: "2rem",
          color: "Highlight"
        }}
      >
        checkout my favorite books. Select your fav novel to read...{" "}
      </p>

      {books.map((novel) => {
        return (
          <button
            onClick={() => novelClickHandler(novel)}
            key={novel}
            className="novel-btn"
            style={{
              cursor: "pointer",
              borderRadius: "2rem",
              margin: "0.5rem ",
              width: "20%",
              backgroundColor: "rgb(213, 231, 231)",
              padding: " 0.5rem 0.5rem",
              border: " 2px solid black"
            }}
          >
            {novel}
          </button>
        );
      })}
      <hr />

      <ul
        style={{
          paddingInline: "1px",
          textAlign: "left"
        }}
      >
        {novelList[novel].map((data) => {
          return (
            <li
              key={data.name}
              style={{
                listStyleType: "none",
                padding: "1rem",
                border: "1px solid  #D1D5DB",
                borderRadius: " 1rem",
                margin: "1rem 1rem",
                fontSize: "larger",
                backgroundColor: "hotpink",
               
              }}
            >
              <div>{data.name}</div>

              <div>{data.writer}</div>

              <div>{data.publishedDate}</div>
            </li>
          );
        })}
      </ul>
      
    </div>
  );
}

export default App;
