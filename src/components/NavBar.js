import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'


export default function NavBar() {
  const { currentUser, logout } = useAuth();

  return (
    <Navbar collapseOnSelect sticky='top' expand='sm' bg='dark' variant='dark' >
      <Container>
        <Navbar.Brand>Firebase App</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Item>
              <Link className='nav-link' to="/">Dashboard</Link>
            </Nav.Item>
          </Nav>

          {currentUser
            ?
            <Nav>
              <Nav.Link onClick={logout} >Log Out</Nav.Link>
            </Nav>
            :
            <Nav>
              <Nav.Item>
                <Link className='nav-link' to="/signup">Sign Up</Link>
              </Nav.Item>
              <Nav.Item>
                <Link className='nav-link' to="/Login">Log In</Link>
              </Nav.Item>
            </Nav>
          }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
