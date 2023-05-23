import Logo from "../../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";

import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {

  return (
    <>
      <Navbar bg="light" expand="lg" as='header'>
        <Container>
          <Navbar.Brand as={NavLink} to="/" className="active">
            <img className="logo-img" src={Logo} alt="Little Lemon logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" className="active">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/#About" className="active">
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to="/#About" className="active">
                Our specials
              </Nav.Link>
              <Nav.Link as={NavLink} to="/#Tetimonials" className="active">
                Tetimonials
              </Nav.Link>
              <Nav.Link as={NavLink} to="/reservations" className="active">
                Reservations
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
