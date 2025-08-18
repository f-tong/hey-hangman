import './App.css';
import logo from './img/hm-logo.png';
import hanger from './img/hanger.png';
import Box from "./Box.js";
import Setting from "./Setting.js";

function App() {
  /*let items = [
          'New York',
          'San Francisco',
          'Tokyo'
      ];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/></div>;
*/
  return (<div>
    <a href="index.html"><img id="logo" src={logo} alt="hey hangman!"/></a>
    <div id="main">
      <div id="ls">
        <Setting />
        <img src={hanger} alt="oops! there was an error!" height="650vh"></img>
      </div>
      <div id="rs"><Box /></div>
    </div>
  </div>)
}

export default App;