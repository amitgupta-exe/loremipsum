import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {

  const Alphabet = ["a", "b", "c", "d", " ", "e", "f", "g", "h", "i", " ", "j", "k", "l", "m", " ", "n", "o", "p", " ", "q", "r", "s", " ", "t", "u", "v", "w", " ", "x", "y", "z"];


  const [count, setCount] = useState(100);
  const [text, setText] = useState([]);



  const generateLorem = (e) => {

    e.preventDefault();

    var Paragraph = [];
    var Word = [];

    for (let i = 0; i <= count; i = i + 2) {
      for (let j = 0; j <= (Math.random() * 10); j++) {
        Word[j] = Alphabet[Math.floor(Math.random() * 26)]
      }
      Paragraph[i] = Word;
      Paragraph[i + 1] = " ";
      Word=[];
    }

    console.log(Paragraph);
    setText(Paragraph);
  }


  return (
    <main className="w-100 h-100">
      <div className="d-flex justify-content-center py-5">
        <h1 className="">Lorem Ipsum Generator</h1>
      </div>
      <form className="d-flex justify-content-center py-2">
        <input onChange={(e) => { setCount(e.target.value) }} value={count} type="number" className="w-10" />
        <button onClick={generateLorem} className="btn-secondary">Generate</button>
      </form>
      <div className="text-center ">
        <p>{text}</p>
      </div>
    </main>
  )
}

export default App;
