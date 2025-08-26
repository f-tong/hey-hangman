import "./App.css"
import Blank from './Blank';

function Prompt({ prompt }) {
    const promptLetters = [];
    const isAlpha = str => /^[a-zA-Z]*$/.test(str);
    for (let i = 0; i < prompt.length; i++) {
        promptLetters.push(prompt.charAt(i));
    }
    //
    return <div id="prompt">{promptLetters.map((char) =>
        ( isAlpha(char) ? <Blank char={char} alpha={true}/> : 
        <Blank char={char} alpha={false}/>))}</div>
}

export default Prompt;