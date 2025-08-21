import "./App.css"
import Blank from './Blank';

function Prompt({ prompt }) {
    const promptLetters = [];
    for (let i = 0; i < prompt.length; i++) {
        promptLetters.push(prompt.charAt(i));
    }
    //
    return <div id="prompt">{promptLetters.map((char) => <Blank char={char} />)}</div>
}

export default Prompt;