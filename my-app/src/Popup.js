import React, {useState} from 'react';
import './Popup.css';

function Popup() {
    const show = () => {
        document.getElementById("pop").style.display = "block";
    };

    

    const [displayType, setDisplay] = useState("none");
    const [text, setText] = useState("Try again!")
    

    return (
        <div id="pop" className="modal">
          <span className="close">&times;</span>
          <div className="modal-content">
            <p>That's right!</p>
          </div>
        </div>
    )
}

export default Popup;
