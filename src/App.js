import './App.css';
import logo from './img/hm-logo.png';
import Box from "./Box.js";

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
    <Box />
  </div>)
}

export default App;