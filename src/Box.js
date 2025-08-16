import "./App.css";
import Letter from "./Letter.js";

function Box() {
    const alphabet1 = [];
    for (let i = 97; i <= 97 + 12; i++) { 
        alphabet1.push(String.fromCharCode(i));
    }
    const alphabet2 = [];
    for (let i = 122 - 12; i < 122; i++) {
        alphabet2.push(String.fromCharCode(i));
    }
    return (<div id="letter-box">
        <div class="letter-row">{alphabet1.map((letter) => <Letter letter={letter} />)}</div>
        <div class="letter-row">{alphabet2.map((letter) => <Letter letter={letter} />)}</div>    
    </div>);
}

export default Box;