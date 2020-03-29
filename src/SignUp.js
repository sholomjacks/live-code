import React from 'react';
import './style.css';
var base64 = require('base-64');


class SignUp extends React.Component {

    state = {
        username: '',
        password: '',
        first_name: '',
        last_name: '',
        view: 'password',
        email: ''
    }

    render() {
        let id = base64.encode(`first-name: ${this.state.first_name}`)
        if (this.state.first_name !== '' && this.state.last_name !== '') {
            alert(id)
            let decodedId = base64.decode(id)
            alert(decodedId)
        }
        return (
            <center>
                <h1 id="first">Sign Up</h1>
                <br />
                <br />
                <label>
                    <input type="text" required onChange={(e) => { this.setState({ username: e.target.value }) }} />
                    <div class="label-text">Username</div>
                </label>
                <br />
                <br />
                <label>
                    <input type={this.state.view} required onChange={(e) => { this.setState({ password: e.target.value }) }} />
                    <div class="label-text">Password</div>
                </label>
                <br />
                <br />
                <label>
                    <input type="text" required onChange={(e) => { this.setState({ first_name: e.target.value }) }} />
                    <div class="label-text">First Name</div>
                </label>
                <br />
                <br />
                <label>
                    <input type="text" required onChange={(e) => { this.setState({ last_name: e.target.value }) }} />
                    <div class="label-text">Last Name</div>
                </label>
                <br />
                <br />
                <label>
                    <input type="email" required onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    <div class="label-text">E-mail Address</div>
                </label>
                <h1>Please Read Before Signing Up</h1>
                <p>
                    <br />  You will not forsure get an account.
                   <br />  This form will be sent to the team of developers and
                   <br />  we will consider giving you an account.
                   <br />  Thank you for visiting,
                   <br />  Sholom Jacks, chief of development.
               </p>
                <br />
                <br />
                <a href={`/signup/confirmed/submission-id=${id}`} class="btn btn-white btn-animate">Sign Up</a>
            </center>
        )
    }
}

export default SignUp