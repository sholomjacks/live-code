import React from 'react'

class cmds extends React.Component {
    render() {
        return (
            <>
            <h1 id="first">Commands:</h1>

            <h2 id="firstl">
                <br /><br />AddAcount: Will ask for username and password wich will become a new account.
                <br /><br />DeleteAccount: Will ask for account name and then delete that account.
                <br /><br />Track: Will ask for the persons username and then track what he is doing.
            </h2>
            </>
        )
    }
}

export default cmds