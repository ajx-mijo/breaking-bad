import { Link } from 'react-router-dom'

import Logo from '../../../src/images/heisenberg.png'

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const MainNavBar = () => {
  return (
    <Navbar expand='sm'>
      <Container>
        <Navbar.Brand as={Link} to='/' className='intro-navbar'><img
          src={Logo}
          width="50"
          height="50"
          className="d-inline-block align-center img-nav"
          alt="Logo"
        />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className='justify-content-end' if='basic-navbar-nav'>
          <Nav>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to='/characters'>Characters</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MainNavBar