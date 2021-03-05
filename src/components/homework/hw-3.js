import React, {Component} from 'react'

class Input extends Component {

    state = {
        login: '',
        password: ''
    }

    onChangeLogin = (event) => {
        this.setState({login: event.target.value})
    }

    onChangePassword = (event) => {
        this.setState({password: event.target.value})
    }

    clearInputs = () => {
        this.setState({login: '', password: ''})
    }

    render() {
        return(
            <div>
                <input type = 'text' placeholder = 'login' onChange = {this.onChangeLogin} value = {this.state.login}/>
                <input type = 'password' placeholder = 'password' onChange = {this.onChangePassword} value = {this.state.password}/>
                <button onClick = {this.clearInputs}>Clear</button>
            </div>
        )
    }
}


// Task 2
class Button extends Component {
    
    state = {
        loading: false,
        greeting: ''
    }

    showLoader = () => {
        
        setTimeout(this.sayHi, 3000);
        this.activeLoader();
    }

    activeLoader = () => {
        this.setState({loading: !this.state.loading})
    }

    sayHi = () => {
        this.setState({loading: false, greeting: 'Hello!'})
    }

    render() {
        return(
        <div>
            <button onClick = {this.showLoader}>Say HI</button>
            {this.state.loading && (<div className = 'loader'></div>)}
            {this.state.greeting !== '' && (<span>{this.state.greeting}</span>)}
        </div>
        )
    }
}

export {Input, Button}