import logo from './logo.svg';
import './App.css';
import {Square} from './components/homework/hw-1'
import {Text} from './components/homework/hw-1'
import {First, Huge, Second, Check, Change} from './components/homework/cw-1'

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
      <First text = 'Regular text'/>
      <Huge />
      <Second size = '40px' color = 'green' text = 'Green'/>
      <Second size = '36px' textDecoration = {true} text = 'Underlined'/>
      <Check />
      <Change />
    </div>
  );
}

export default App;
