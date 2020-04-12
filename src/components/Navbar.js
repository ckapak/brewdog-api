import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  
  render() {
    return (
      <nav className="navbar is-dark">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">BrewDog</Link>
            <Link className="navbar-item" to="/beers">Show all Beers</Link>
            <Link className="navbar-item" to="/random">Random</Link>
          </div>
        </div>
      </nav>
    )
  }
}

export default withRouter(Navbar)
