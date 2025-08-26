import "./App.css";

function Blank({ char, alpha }) {
    const hideStyle = { opacity: 0 }

    return <div className="b-letter">
        { alpha ? <><p className="p-letter" style={ hideStyle } >{ char }</p><p className="under">&mdash;</p></> :
            <p className="p-letter">{ char }</p> }
    </div>;
}

export default Blank;