import "./App.css";

function Letter({ letter, onClick }) {
    return <div><h2 className="letter" onClick={onClick} >{letter}</h2></div>
}

export default Letter;