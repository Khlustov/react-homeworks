import React, {Component} from 'react'


// Task 1
class Loader extends Component {  
       

    state = {
        button: false,        
    }   

    changeState = () => {
        this.setState({button: !this.state.button})
    }
    

    render() {
      
        return (
        <div>
            {this.state.button ? <div onClick={this.changeState} className = 'loader'></div> : <button onClick={this.changeState}>Load</button>}
        </div>
        )
    }
}


// Task 2
const Element = ({name}) => {
    
    return(
        <div>
            {name ? <button>Load</button> : <div className = 'loader'></div>}
        </div>
    )
    }



// Task 3

class Dropdown extends Component {
    ingredients = [
        {id: 1, name: 'лук'},
        {id: 2, name: 'помидор'},
        {id: 3, name: 'сыр'},
        {id: 4, name: 'оливки'},
        {id: 5, name: 'бекон'},
    ]

    state = {
        opened: false
    }

    onToggle = () => {
        this.setState({opened: !this.state.opened})
    }

    render() {
        return(
            <div>
                <button onClick = {this.onToggle}>Ингредиенты {this.state.opened ? '\u25B2' : '\u25BC'}</button>
                {this.state.opened && this.ingredients.map( (item) => {
                    return(
                        <div key = {item.id}>{item.name}</div>
                    )
                } )}
            </div>
        )
    }
}

export {Loader, Element, Dropdown};