import "./App.css";
import { useState } from "react";
import axios from "axios";
function App() {
  const [from, setFrom] = useState("ar");
  const [to, setTo] = useState("ar");
  const [word, setWord] = useState("");
  const [translation, setTranslation] = useState("");
  const [image, setImage] = useState("");

  // onsubmit function that calls our API to get the translation
  async function handleTranslate(event) {
    event.preventDefault();
    // const API = `http://localhost:8080/translate?word=${word}&from=${from}&to=${to}`;
    const API = `https://translatim-ev0b.onrender.com/translate?word=${word}&from=${from}&to=${to}`;
    const res = await axios.get(API);
    setTranslation(res.data.translation);
    setImage(res.data.image);
  }

  return (
    <>
      <section className="container">
        <form onSubmit={handleTranslate}>
          <div className="container">
            <select onChange={(event) => setFrom(event.target.value)}>
              <option value="en">English</option>
              <option value="ar">Arabic</option>
              <option value="pl">Polish</option>
              <option value="es">Spanish</option>
              <option value="tr">Turkish</option>
            </select>
            <input
              placeholder="Translate"
              onChange={(event) => setWord(event.target.value)}
            />
          </div>
          <div className="container">
            <select onChange={(event) => setTo(event.target.value)}>
              <option value="pl">Polish</option>
              <option value="ar">Arabic</option>
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="tr">Turkish</option>
            </select>
            <div className="output">{translation}</div>
          </div>
          <button>Submit</button>
        </form>
      </section>

      <img src={image} />
      {/* show our translation */}
      {/* STRETCH: show a gif from the GIPHY API that matches the translation */}
    </>
  );
}
export default App;
