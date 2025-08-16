import Blank from './Blank';

function Prompt({ prompt }) {
    const promptLetters = [];
    for (let i = 0; i < prompt.length; i++) {
        promptLetters.push(prompt.charAt(i));
    }
    return <div>{promptLetters.map((char) => <Blank character={char} />)}</div>
}

export default Prompt;