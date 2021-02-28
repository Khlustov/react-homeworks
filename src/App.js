import logo from './logo.svg';
import './App.css';
import {Square} from './components/homework/hw-1'
import {Text} from './components/homework/hw-1'

function App() {
  return (
    <div>
      <Square 
      text = "Big one"
      cssClass = "big-square"
      />
      <Square 
      text = "Medium"
      cssClass = "med-square"
      />
      <Square 
      text = "Small one"
      cssClass = "small-square"
      />
      <Text 
      text = "Some text"
      />
    </div>
  );
}

export default App;
