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

    const labelStyle = {color: '#544111', fontSize: '1.5vw'};

    return <><p className="nunito-bold" style={ labelStyle }>click a letter to make a guess!</p>
    <div id="letter-box">
        <div className="letter-row">{alphabet1.map((letter) => <Letter letter={letter} />)}</div>
        <div className="letter-row">{alphabet2.map((letter) => <Letter letter={letter} />)}</div>    
    </div> </>;
}

export default Box;