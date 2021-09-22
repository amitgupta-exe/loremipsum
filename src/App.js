import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Paragraph from './components/Paragraph';



const App = () => {

  //Database

  const Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u"];

  //States
  const [count, setCount] = useState(2);
  const [text, setText] = useState([]);




  //Function to Generate Lipsum
  const generateLorem = () => {

    if (count > 0) {

      var Paragraphs = [];
      var Paragraph = [];
      var Sentence = [];
      var Word = [];

      for (let h = 0; h < count; h++) {
        for (let i = 0; i <= (Math.floor(Math.random() * 40 + 10)); i = i + 2) {
          for (let j = 0; j <= (Math.floor(Math.random() * 5 + 20)); j = j + 2) {
            for (let k = 0; k <= (Math.floor(Math.random() * 10)); k++) {
              Word[k] = Alphabet[Math.floor(Math.random() * Alphabet.length)];
            }
            Sentence[j] = Word;
            Sentence[j + 1] = " ";
            Word = [];
          }
          Sentence[Sentence.length - 1] = '. ';
          Sentence[0][0] = Sentence[0][0].toUpperCase();
          Paragraph[i] = Sentence;
          Sentence = [];
        }
        Paragraphs[h] = Paragraph;
        Paragraph = [];
      }

      setText(Paragraphs);

    } else {
      setText("Enter a Valid Number");
    }
  }

  //USEEFFECT to generate initial state.
  useEffect(() => { generateLorem(); }, []);




  return (
    <main className="w-100 h-100 text-center">
      <div className="d-flex justify-content-center py-5">
        <h1 className="">Lorem Ipsum Generator</h1>
      </div>
      <h6>Enter Number of Paragraphs:</h6>
      <form className="d-flex justify-content-center">
        <input onChange={(e) => { setCount(e.target.value) }} value={count} type="number" className="w-10" />
        <button onClick={(e) => { e.preventDefault(); generateLorem(); }} className="btn-secondary">Generate</button>
      </form>
      <div className="text-center py-5 px-5">
        {text.map((paragraph) => { return <Paragraph text={paragraph} /> })}
      </div>
    </main>
  )
}

export default App;
