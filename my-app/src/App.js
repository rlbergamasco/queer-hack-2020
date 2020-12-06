import React, { useState } from 'react';
import './App.css';
import Popup from './Popup.js';

class QuestionArr {
    /**question: String of question
     * answers: array containing the four answer choices
     * correctAnswer: int (0-3) of which answer is correct
     */
    constructor(question, answer0, answer1, answer2, answer3, correct){
      this.question = question;
      this.answer0 = answer0;
      this.answer1 = answer1;
      this.answer2 = answer2;
      this.answer3 = answer3;
      this.correctAnswer = correct;
    }
  }
  


  const questions = Array(10);
  questions[0] = new QuestionArr("On average, how much does an ambulance cost in the US?","$45","$450", "$1000", "$2300", 3);
  questions[1] = new QuestionArr("On average, how much does an ambulance cost in Canada?","$45","$450", "$1000", "$2300", 1);
  questions[2] = new QuestionArr("How much does the average American spend on prescription and non-prescription medications annually?", "$75", "$500", "$1200", "$1500", 3);
  questions[3] = new QuestionArr("How much does the average UK resident spend on prescription and non-prescription medications annually?","$75", "$500", "$1200", "$1500", 2);
  questions[4] = new QuestionArr("What is the average cost of one EpiPen in the US?","$150", "$300", "$500", "$700", 4);
  questions[5] = new QuestionArr("What is the average cost of one EpiPen in Canada?","$150", "$300", "$500", "$700", 1);
  questions[6] = new QuestionArr("What is the average out of pocket monthly type 1 diabetes cost in the US?","$15", "$65", "$180", "$360", 4);
  questions[7] = new QuestionArr("What is the average out of pocket monthly type 1 diabetes cost in the UK?","$15", "$65", "$180", "$360", 2);

  console.log(questions[0]);
  

function App() {

    //color variable to match with answers
    let colors = ["", "blue", "blue", "blue", "blue"];

    /**
     * qNum is the question number we are on
     */
    let [qNum, setQNum] = useState(0);
    let [state, setState] = useState(false);
    const [isBlue, setBlue] = useState(true);
    const [isRed, setRed] = useState(false);
    let [color, setColor] = useState(colors);

    
    

    const changeColor = (answer, newColor) => {
        setColor(colors[answer] = newColor);
    }

    /**
     * Hook to increment qNum by 1,
     * changing the question to the next question
     */
    const nextQ = () => {
        if (qNum === 7) {
            document.getElementById('conclusion').scrollIntoView();
        } else {
            document.getElementById('question').scrollIntoView();
            setQNum(qNum + 1);
        }

        for(let i =1; i <=4; i++){
            //colors[i] = "blue";
            setColor(i, "red");
        }
    };

    const previousQ = () => {
        if (qNum === 0) {
            document.getElementById('intro').scrollIntoView();
        } if (qNum > 0) {
            document.getElementById('question').scrollIntoView();
            setQNum(qNum - 1);
        }
        for(let i =1; i <=4; i++){
            //colors[i] = "blue";
            setColor(i, "green");
        }
    };
    

    // let state = {
    //     seen: false
    // };
    

    const togglePop = () => {
        setState(!state);
    };











    /**
     * should send popup when an answer is clicked
     */
    function popAnswer(answer) {
         setState(true);
         
        if(answer === questions[qNum].correctAnswer){
            //correct answer chosen
            colors[answer] = "green";
            setColor(answer, "green");
            alert("That's right!");
            
        } else {
            //incorrect answer chosen
            colors[answer] = "red";
            setColor(answer, "red");
            alert("Try again!");

        }
        //window.location.reload(true);
        setRed(!isRed);
        console.log(colors[answer]);
    };

    return (        
        <div className="slides">
            <div id="intro">
                <h2 id="spacing">That costs what?</h2>
                <h3 id="spacing2">Healthcare Trivia Game</h3>
                <p>Test your knowledge and see how healthcare prices in the United States compare to other countries.</p>
                <button className="blue" id="start" onClick={()=>document.getElementById('question').scrollIntoView()}>Start</button>
            </div>
            <div id="question">
                
                <h3>{questions[qNum].question}</h3>
                <section className="buttonGrid">
                    <section className="grid-4">
                    <button className={color[1]} onClick={()=>popAnswer(1)}> {questions[qNum].answer0}</button>
                    <button className={color[2]} onClick={()=>popAnswer(2)}> {questions[qNum].answer1}</button>
                    <button className={color[3]} onClick={()=>popAnswer(3)}> {questions[qNum].answer2}</button>
                    <button className={color[4]} onClick={()=>popAnswer(4)}> {questions[qNum].answer3}</button>
                    <button class="change" onClick={previousQ}>Back</button>
                    <button class="change" onClick={nextQ}>Next</button>
                    <Popup pop={popAnswer}/>
                    <div>
                    {/* <div className="btn" onClick={this.togglePop}>
                    <button>New User?</button>
                    </div> */}
                    {state ? <Popup toggle={togglePop} /> : null}
                    </div>
                    </section>
                </section>
            </div>
            <div id="conclusion">
                <h2 id="spacing3">Thanks for playing!</h2>
                <h4>For more information, check out these links:</h4>
                <ul>
                    <li><a target="_blank" href="https://www.forbes.com/sites/nextavenue/2019/10/25/what-broke-american-health-care-and-how-to-fix-it/?sh=57aebd5147ed">Forbes: What Broke American Health Care And How To Fix It</a></li>
                    <li><a target="_blank" href="https://www.pgpf.org/blog/2020/07/how-does-the-us-healthcare-system-compare-to-other-countries">PGPF: How Does The U.S. Healthcare System Compare To Other Countries?</a></li>
                    <li><a target="_blank" href="https://data.oecd.org/healthres/pharmaceutical-spending.htm#indicator-chart">OECD: Global Pharmaceutical Spending Chart</a></li>
                    <li><a target="_blank" href="https://www.bbc.com/news/world-us-canada-47491964">BBC: The Human Cost of Insulin in America</a></li>
                </ul>
                <button className="blue" id="back" onClick={()=>document.getElementById('question').scrollIntoView()}>Previous</button>
            </div>
            
        </div>
    )
}

export default App;