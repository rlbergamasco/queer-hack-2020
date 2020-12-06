import React, { useState } from 'react';
import './App.css';
import Question from './Question.js';

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
  questions[0] = new QuestionArr("How much does an ambulance cost in the US?","$10","$50", "$1000", "$2500", 3);
  questions[1] = new QuestionArr("How much does an ambulance cost in the UK or Canada??","$10","$50", "$1000", "$2500", 3);
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
    const [qNum, setQNum] = useState(0);

    /**
     * Hook to increment qNum by 1,
     * changing the question to the next question
     */
    const nextQ = () => {
        setQNum(qNum + 1);
    };

    /**
     * should send popup when an answer is clicked
     */
    function popAnswer(answer) {
        // console.log("hello");
        if(answer == questions[qNum].correctAnswer){
            //correct answer chosen
            alert('correct!');
        } else {
            //incorrect answer chosen
            alert('incorrect');
        }
    };
    
    return (
        <div>
            <Question  text={questions[qNum].question} 
            answer1={questions[qNum].answer0}
            answer2={questions[qNum].answer1}
            answer3={questions[qNum].answer2}
            answer4={questions[qNum].answer3}
            popAnswer={popAnswer()}
            />

        </div>
    )
}

export default App;