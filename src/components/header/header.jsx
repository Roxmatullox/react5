import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div className="container">
      <Nav className='nav' >
      <Nav.Item>
        <NavLink className="nav-link" to="/home">Home</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink className="nav-link" to="/debts">Debts</NavLink>
      </Nav.Item>
    </Nav>
      </div>
    </header>
  )
}

export default Header