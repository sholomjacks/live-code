import React from 'react'
import './radio.css'
function checkbox() {
    var x = document.getElementById("one").checked
    alert("1")
    if (x === true) {
        alert("2")
        localStorage.setItem("intro", "no")
    } else {
        // do nothing
    }

    window.location = '/home'
}

class top extends React.Component {

    state = {
        href: ''
    }

    componentDidMount() {
        var ifState = localStorage.getItem("intro") || ''
        
        if (ifState === "no") {
            window.location = '/home'
        } else {
            // do nothing
        }
    }

    render() {
        return (
            <div>
                <h1>Hello!</h1> <br /> <h2>welcome to the secret world of PADAH (Professional Agency of Detectives And Hackers).
            <br /> Now you will be directed to your Home Page.
            <br /></h2>

                <section className="Show-again">
                    <input id='one' type='checkbox' />
                    <label for='one'>
                        Don't Show Again
                    </label>
                </section>

                <section className="button">
                    <button onClick={checkbox}>Go To Home</button>
                </section>
            </div>
        )
    }
}

export default top;