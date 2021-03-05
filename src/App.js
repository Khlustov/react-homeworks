import logo from './logo.svg';
import './App.css';
import {Square} from './components/homework/hw-1'
import {Text} from './components/homework/hw-1'
import {First, Huge, Second, Check, Change} from './components/homework/cw-1'
import {SomeList, SignIn} from './components/homework/hw-2'
import {Loader, Element, Dropdown} from './components/homework/cw-2'

function App() {
  return (
    <div>
      <Loader />
      <Element name = {true}/>
      <Element name = {false}/>
      <Dropdown />
    </div>
  );
}

export default App;
