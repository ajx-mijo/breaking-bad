import { Link } from 'react-router-dom'



import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'

const MainNavBar = () => {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand as={Link} to='/'><img
          src='./BBtransparent.jpg'
          width="30"
          height="30"
          className="d-inline-block align-top"
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