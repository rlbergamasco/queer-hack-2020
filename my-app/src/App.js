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
  questions[0] = new QuestionArr("How much does an ambulance cost in the US?","$45","$450", "$1000", "$2300", 3);
  questions[1] = new QuestionArr("How much does an ambulance cost in Canada?","$45","$450", "$1000", "$2300", 1);
  questions[2] = new QuestionArr("How much does the average American spend on prescription and non-prescription medications annually?", "$75", "$500", "$1200", "$1500", 3);
  questions[3] = new QuestionArr("How much does the average UK resident spend on prescription and non-prescription medications annually?","$75", "$500", "$1200", "$1500", 2);
  questions[4] = new QuestionArr("What is the average cost of one EpiPen in the US?","$150", "$300", "$500", "$700", 4);
  questions[5] = new QuestionArr("What is the average cost of one EpiPen in Canada?","$150", "$300", "$500", "$700", 1);
  questions[6] = new QuestionArr("What is the average out of pocket monthly type 1 diabetes cost in the US?","$15", "$65", "$180", "$360", 4);
  questions[7] = new QuestionArr("What is the average out of pocket monthly type 1 diabetes cost in the UK?","$15", "$65", "$180", "$360", 2);

  console.log(questions[0]);
  

function App() {

    /**
     * qNum is the question number we are on
     */
    let [qNum, setQNum] = useState(0);
    let [state, setState] = useState(false);
    const [isBlue, setBlue] = useState(true);
    const [isRed, setRed] = useState(false);
    const [isGreen, setGreen] = useState(false);

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
    };

    const previousQ = () => {
        if (qNum === 0) {
            document.getElementById('intro').scrollIntoView();
        } if (qNum > 0) {
            document.getElementById('question').scrollIntoView();
            setQNum(qNum - 1);
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
            alert("That's right!");
        } else {
            //incorrect answer chosen
            alert("Try again!");
        }
    };

    return (        
        <div className="slides">
            <div id="intro">
                <h1>U.S.</h1>
                <h2 id="spacing">Healthcare:</h2>
                <h3>What it really costs</h3>
                <button className="blue" id="start" onClick={()=>document.getElementById('question').scrollIntoView()}>START</button>
            </div>
            <div id="question">
                
                <h3>{questions[qNum].question}</h3>
                <section className="buttonGrid">
                    <section className="grid-4">
                    <button className={isRed ? "red" : "blue"} onClick={()=>popAnswer(1)}> {questions[qNum].answer0}</button>
                    <button onClick={()=>popAnswer(2)}> {questions[qNum].answer1}</button>
                    <button onClick={()=>popAnswer(3)}> {questions[qNum].answer2}</button>
                    <button onClick={()=>popAnswer(4)}> {questions[qNum].answer3}</button>
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
                <h2>Conclusion</h2>
                <h4>For more information, check out these links:</h4>
                <ul>
                    <li><a href="https://www.forbes.com/sites/nextavenue/2019/10/25/what-broke-american-health-care-and-how-to-fix-it/?sh=57aebd5147ed">Forbes: What Broke American Health Care And How To Fix It</a></li>
                    <li><a href="https://www.pgpf.org/blog/2020/07/how-does-the-us-healthcare-system-compare-to-other-countries">PGPF: How Does The U.S. Healthcare System Compare To Other Countries?</a></li>
                    <li><a href="https://data.oecd.org/healthres/pharmaceutical-spending.htm#indicator-chart">OECD: Global Pharmaceutical Spending Chart</a></li>
                    <li><a href="https://www.bbc.com/news/world-us-canada-47491964">BBC: The Human Cost of Insulin in America</a></li>
                </ul>
                
            </div>
            
        </div>
    )
}

export default App;