import React from 'react'
import './home.css'
function go(location) {
  var hash = localStorage.getItem("hash")
  if (hash !== null) {
    window.location = location
  }
}

class Users extends React.Component {
  render() {
    return <div>
      <h1>Welcome, User!</h1>
      <h2>Commands</h2>
      <img id="firstlc" src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/terminal-512.png" alt="Commands" height="50" onClick={() => go('/admin')} />
      <h2>Games</h2>
      <img id="firstlc" src="https://www.vippng.com/png/full/355-3554420_gamer-profile-png-icon-font-awesome-game-icon.png" alt="Games" height="50" onClick={() => go('/games')} />
    </div>
  }
}
export default Users