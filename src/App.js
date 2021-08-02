import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "⛅": "Cloudy",
  "🌞": "Sunny",
  "🌝": "Full Moon",
  "🌊": "High tide",
  "⚡": "Lightning"
};

var emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setUserInput] = useState("meaning will appear here ");

  function onChangeHandler(event) {
    var emojiinput = event.target.value;

    var meaning = emojiDictionary[emojiinput];
    if (meaning === undefined) {
      setUserInput(
        (meaning = "we are sorry: This emoji is not available in our database")
      );
    }

    setUserInput(meaning);
  }

  function onClickHandler(item) {
    var meaning = emojiDictionary[item];

    setUserInput(meaning);
  }

  return (
    <div className="App">
      <h1 id="heading">Weather-moji (●'◡'●)</h1>

      <input
        id="user-input"
        placeholder="paste emojis to know meaning of them"
        onChange={onChangeHandler}
      ></input>

      <h2 id="output-meaning">{meaning}</h2>

      <div id="emoji-click-list">
        <hr></hr>
        {emojiList.map(function (item) {
          return (
            <span
              style={{ fontSize: "2rem", padding: "10px", cursor: "pointer" }}
              onClick={() => onClickHandler(item)}
            >
              {item}
            </span>
          );
        })}
      </div>
    </div>
  );
}
