import { length, lt, filter, propEq, compose } from 'ramda'
import React from 'react'
import './form.css'
import './style.css'
import './submit_button.css'
import valid_users from './validUsers'
import './signup-button.css'
var bcrypt = require('bcryptjs');
var hash
var Cryptr = require("cryptr")
var cryptr = new Cryptr('hello')

export class App extends React.Component {
    state = {
        username: '',
        password: '',
        router: false,
        view: 'password',
    }

    componentDidMount() {
        var encrypted_users = cryptr.encrypt(valid_users)
        localStorage.setItem("users", encrypted_users)
        let hasht = localStorage.getItem("hash") || ''
        let decide = bcrypt.compareSync("bcrypt-connection-secured", hasht)
        if (decide === true) {
            var intro = localStorage.getItem("intro")
            if (intro !== "no") {
                window.location = '/intro'
            } else {
                window.location = '/home'
            }
        } else {
            // do nothing
        }
    }

    show = () => {
        if (this.state.view === 'password') {
            this.setState({ view: 'text' })
        } else {
            this.setState({ view: 'password' })
        }
    }

    login = (username, password) => {
        if (length(username) === 0 || length(password) === 0) return
        if (this.is_valid(username, password)) {
            this.setState({ router: true })
            hash = bcrypt.hashSync("bcrypt-connection-secured");
            localStorage.setItem("hash", hash)
            window.location = '/intro'
        } else {
            alert("The login is incorrect.")
        }
    }

    is_valid = (username, password) => compose(
        lt(0),
        length,
        filter(propEq('password', password)),
        filter(propEq('username', username))
    )(valid_users)

    render() {
        return (
            <div>
                <div class="text-box">
                    <a href="/signup" class="btn btn-white btn-animate">Sign Up</a>
                </div>
                <center>
                    <section className="overlay">
                        <h1 id="first">Sign In</h1>
                        <label>
                            <input type="text" required onChange={(e) => { this.setState({ username: e.target.value }) }} />
                            <div class="label-text">Username</div>
                        </label>
                        <label>
                            <input type={this.state.view} required onChange={(e) => { this.setState({ password: e.target.value }) }} />
                            <div class="label-text">Password</div>
                        </label>
                        <img id="fontlc" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/18/eye-1-512.png" alt="Show Password" width="50" onClick={this.show} />
                        <br />
                        <button onClick={() => this.login(this.state.username, this.state.password)}>Submit</button>
                    </section>
                </center>
            </div>
        )
    }
}

export default App;




