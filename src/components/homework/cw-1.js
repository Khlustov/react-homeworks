import React from 'react';


// Task 1

const First = ({text}) => {
    return <p>{text}</p>
  }
  
  
  
class Huge extends React.Component {

state = {
  text: "Huge header", 
}

render() {

  const hugeText = {      
    fontSize: 50 + 'px',     
  };

  return (  
   <div>       
     <p style = {hugeText}>{this.state.text}</p>       
   </div>  
  )
}

}

const Second = (props) => {
  const underlined = props.textDecoration ? 'underline' : 'none'
  return <p style = {{fontSize: props.size, color: props.color, textDecoration: underlined}}>{props.text}</p>
}

// Task 2

class Check extends React.Component {

state = {
    content: 'X'
}

changeContent = () => {
    this.setState({content: !this.state.content})
}

render() {

const style = {
    fontSize: 36 + 'px',
    fontWeight: 700
}

    return(
        <div>
           <p style = {style} onClick = {this.changeContent}>{this.state.content ? 'V' : 'X'}</p> 
        </div>
    )
}

}

// Task 3

class Change extends React.Component {

array = ['Eat', 'Sleep', 'Rave', 'Repeat'];

state = {
    index: 0,    
}

changeValue = () => {
    this.setState({index: this.state.index < this.array.length - 1 ? this.state.index + 1 : 0})
}

render() {
    const style = {
        fontSize: 36 + 'px',
    }
    return(
        <div style = {style} onClick = {this.changeValue}>{this.array[this.state.index]}</div>
    )
}

}

// Export
export {First, Huge, Second, Check, Change}