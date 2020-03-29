import React from 'react'
import valid_users from './validUsers'
var bcrypt = require('bcryptjs')
const axios = require('axios')

function pushCustom(usernameparam, passwordparam) {
    valid_users.push({
        username: usernameparam,
        password: passwordparam
    })
}

function go() {
    var hash = localStorage.getItem("hash")
    var decide = bcrypt.compare("bcrypt-connection-secured", hash)

    if (decide === true) {
        var usernamea = this.state.usernamea
        var passworda = this.state.passworda

        pushCustom(usernamea, passworda)

    }
}

class Admin extends React.Component {

    state = {
        cmd: '',
        go: false,
        track: false,
        usernamet: '',
        addAccount: false,
        usernamea: '',
        passworda: '',
        view: 'password'
    }
    runcmd = (e) => {
        if (e === 'Add Account') {
            this.setState({ addAccount: true })
        }
    }

    gousername = (e) => {
        let hasht = localStorage.getItem("hash")
        let decide = bcrypt.compareSync("bcrypt-connection-secured", hasht)
        if (decide === true) {
            window.location = '/admin/usernames'
        } else {
            // do nothing
        }
    }

    show = () => {
        if (this.state.view === 'password') {
            this.setState({ view: 'text' })
        } else if (this.state.view === 'text') {
            this.setState({ view: 'password' })
        }
    }
    
    render() {
        const axiosTest = axios.get('padah-backend.herokuapp.com/valid-users')
            .catch( () => {
                console.error();
            })
        alert(axiosTest)
        if (this.state.addAccount === true) {
            return (
                <>
                    <label>
                        <input type="text" required value={this.state.usernamea} onChange={(e) => this.setState({ usernamea: e.target.value })} />
                        <div class="label-text">New username</div>
                    </label>
                    <br />
                    <br />
                    <label>
                        <input type={this.state.view} required value={this.state.passworda} onChange={(e) => this.setState({ passworda: e.target.value })} />
                        <div className="label-text">New password</div>
                    </label>
                    <img id="fontlc" src="https://cdn2.iconfinder.com/data/icons/flaticons-solid/18/eye-1-512.png" alt="Show Password" width="50" onClick={this.show} />
                    <button onClick={() => this.gousername(this.state.usernamet)}>Add account</button>
                </>
            )
        }
        return (
            <div>
                <title>Admin Commands</title>
                <label>
                    <input type="text" required value={this.state.cmd} onChange={(e) => { this.setState({ cmd: e.target.value }); this.state.cmd.toUpperCase() }} />
                    <div class="label-text">Command</div>
                </label>

                <br />
                <br />
                <button type="submit" onClick={() => this.runcmd(this.state.cmd)} >Run</button>
                <button onClick={go}>Commands</button>
            </div>
        )
    }
}

export default Admin