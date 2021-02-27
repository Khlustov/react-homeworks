import React from 'react'

export class Square extends React.Component {

    render() {
      return(
        <div className = {this.props.cssClass}>
           {this.props.text}
        </div>
      )
    }
  }
  
export class Text extends React.Component {
  
    state = {
      italic: false
    }
  
    changeStyle = () => this.setState({italic: !this.state.italic})
  
    render() {
      return(
        <p  onClick = {this.changeStyle} className = {this.state.italic === true ? 'text' : ''}> {this.props.text} </p>
      )
    }
  }

