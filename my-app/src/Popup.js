import React, {useState} from 'react';
import './Popup.css';

function Popup() {
    const show = () => {
        document.getElementById("pop").style.display = "block";
    };

    const [displayType, setDisplay] = useState("none");

    return (
        <div id="pop" className="modal">
          <span className="close">&times;</span>
          <div className="modal-content">
            <p>That's right!</p>
            <button>NEXT</button>
          </div>
        </div>
    )
}

export default Popup;
