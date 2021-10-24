import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Paragraph from './components/Paragraph';



const App = () => {

  //Database
  const Alphabet = ["lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "ut", "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi", "ut", "aliquip", "ex", "ea", "commodo", "consequat", "Duis", "aute", "irure", "dolor", "in", "reprehenderit", "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla", "pariatur", "excepteur", "sint", "occaecat", "cupidatat", "non", "proident", "sunt", "in", "culpa", "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum"];
  
  //States
  const [count, setCount] = useState(2);
  const [text, setText] = useState([]);
  const [dark, setDark] = useState(false);
  const [button, setButton] = useState("Dark Mode");

  //styles for dark mode
  const themeStyles={
    backgroundColor: dark ? 'black' : 'white',
    color: dark ? 'white' : 'black'
  }

  //Function to Generate Lipsum
  const generateLorem = () => {

    if (count > 0) {

      var Paragraphs = []; //Store Paragraphs
      var Paragraph = []; //Store Sentences
      var Sentence = []; //Store Words
      Paragraph[0] = "Lorem ipsum dolor laborum non laboris et nisi occaecat adipiscing. "; //to Starting Text.



      for (let h = 0; h < count; h++) {
        for (let i = 1; i <= (Math.floor(Math.random() * 40 + 20)); i = i + 2) {
          for (let j = 0; j <= (Math.floor(Math.random() * 20 + 10)); j = j + 2) {
            Sentence[j] = Alphabet[Math.floor(Math.random() * 69)];
            Sentence[j + 1] = " ";
          }
          // Full stop at the end of sentence
          Sentence[Sentence.length - 1] = '. ';

          //Capitalize first letter of a sentence
          const arr = Sentence[0].split(" ");
          for (var k = 0; k < arr.length; k++) {
            arr[k] = arr[k].charAt(0).toUpperCase() + arr[k].slice(1);
          }
          Sentence[0] = arr.join(" ");


          Paragraph[i] = Sentence;
          Sentence = [];
        }
        Paragraphs[h] = Paragraph;
        Paragraph = [];
      }

      setText(Paragraphs);
    } 
    
    else {
      setText(["Enter a Valid Number"]);
    }
  }

  //USEEFFECT to generate initial state.
  useEffect(() => { generateLorem(); }, []);




  return (
    <main style={themeStyles} className="w-100 h-100 text-center">
      <button className="btn-secondary" onClick={()=> {setDark(prevDark => !prevDark);(button === "Dark Mode") ? setButton("Light Mode"):setButton("Dark Mode")}}>{button}</button>
      <div className="d-flex justify-content-center py-5">
        <h1 className="">Lorem Ipsum Generator</h1>
      </div>
      <h6>Enter Number of Paragraphs:</h6>
      <form className="d-flex justify-content-center">
        <input onChange={(e) => { setCount(e.target.value) }} value={count} type="number" className="w-10" />
        <button onClick={(e) => { e.preventDefault(); generateLorem(); }} className="btn-secondary">Generate</button>
      </form>
      <div className="text-center py-5 px-5">
        {text.map((paragraph) => { return <Paragraph key={paragraph} text={paragraph} /> })}
      </div>
    </main>
  )
}

export default App;
