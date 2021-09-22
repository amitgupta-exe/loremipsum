import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {

  const Alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i",  "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",  "x", "y", "z", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u", "a", "e", "i", "o", "u",];


  const [count, setCount] = useState(100);
  const [text, setText] = useState([]);



  const generateLorem = (e) => {

    e.preventDefault();

    var Paragraph = [];
    var Sentence = [];
    var Word = [];
  
    // for (let i = 0; i <= count; i = i + 2) {
    //   for (let j = 0; j <= (Math.random() * 10); j++) {
    //     Word[j] = Alphabet[Math.floor(Math.random() * 26)]
    //   }
    //   Paragraph[i] = Word;
    //   Paragraph[i + 1] = " ";
    //   Word=[];
    // }

    for (let i = 0; i <= 1000; i=i+2) {
      for (let j = 0; j <= (Math.floor(Math.random()*5 + 20)); j=j+2) {
        for (let k = 0; k <= (Math.floor(Math.random()*10)); k++) {
            Word[k] = Alphabet[Math.floor(Math.random() * Alphabet.length)]; 
        }
        Sentence[j] = Word;
        Sentence[j + 1] = " ";
        Word=[];
      }
      Sentence[Sentence.length-1] = '. ';
      Sentence[0][0] = Sentence[0][0].toUpperCase();
      Paragraph[i] = Sentence;
  
      Sentence=[];
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
