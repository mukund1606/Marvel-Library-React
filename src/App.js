import "./styles/App.css";
import Avenger from "./Avenger";
import avengers_data from "./Resources/avengers.json";
import { useRef, useState } from "react";

function App() {
  const [toggleAddFeature, setToggleAddFeature] = useState(false);
  const [avengers, setAvengers] = useState(
    JSON.parse(localStorage.getItem("avengers"))
  );
  const charNameRef = useRef();
  const realNameRef = useRef();
  const imageURLRef = useRef();
  if (!avengers) {
    localStorage.setItem("avengers", JSON.stringify(avengers_data.data));
    setAvengers(avengers_data);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name: charNameRef.current.value,
      charname: realNameRef.current.value,
      imageURL: imageURLRef.current.value,
      imgalt: charNameRef.current.value,
    };
    setAvengers([...avengers, data]);
    localStorage.setItem("avengers", JSON.stringify(avengers));
  };
  return (
    <>
      <div className="head-element">
        <h1 className="header">Marvel Library</h1>
        <div
          className="create-element"
          onClick={() => {
            setToggleAddFeature(!toggleAddFeature);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="create-button"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
      <div className="avengers">
        {avengers?.map((avenger, index) => {
          return <Avenger key={index} avenger_data={avenger} />;
        })}
      </div>
      {toggleAddFeature && (
        <form className="add-element">
          <input type="text" placeholder="Character Name" ref={charNameRef} />
          <input type="text" placeholder="Real Name" ref={realNameRef} />
          <input type="text" placeholder="Image URL" ref={imageURLRef} />
          <button type="submit" onClick={handleSubmit}>
            Add
          </button>
        </form>
      )}
    </>
  );
}

export default App;
