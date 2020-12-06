import React from 'react';
import './slide.css';
import QuestionArr from "./App.js";
import Popup from "./Popup.js";
import popAnswer from "./App.js"
import App from "./App.js";

function Question(props) {

    return (
        <div>
            <h2>{props.text}</h2>
            <section className="grid-4">
            <button /*onClick={}*/> {props.answer1}</button>
            <button /*onClick={props.popAnswer}*/> {props.answer2}</button>
            <button /*onClick={props.popAnswer}*/> {props.answer3}</button>
            <button /*onClick={props.popAnswer}*/> {props.answer4}</button>
            <Popup />
            </section>

        </div>
    )

    
}

export default Question;
