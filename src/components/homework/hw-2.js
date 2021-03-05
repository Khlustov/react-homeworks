import React from 'react'
import data from '../../data.json'


// Task 1
class SomeList extends React.Component {

render() {
    return(
        <div>{ data.map( (element, index) => {
            return(
                <div key = {element._id}>
                    <h3> {`${element.name.first}`} </h3>
                    <h4> {`${element.name.last}`} </h4>
                </div>
            )
        })}</div>
    )
}

}


// Task 2

class SignIn extends React.Component {

    state = {
        isSignedIn: false
    }

    changeElement = () => {
        this.setState({isSignedIn: !this.state.isSignedIn})
    }

    timer = () => {
        setTimeout(this.changeElement, 3000)
    }

    render() {
        return(
            <div onClick = {this.timer}>
                {this.state.isSignedIn ? 'Hello user' : <button>Sign In</button>}
            </div>
        )
    }
}

export {SomeList, SignIn}

