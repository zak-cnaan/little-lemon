import Logo from "../../assets/images/logo.jpg";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

import { Navbar, Nav, Container } from "react-bootstrap";

const Header = () => {

  const headerRef = useRef(null);


    useEffect(() => {
        let prevScrollPos = window.scrollY;
    
        const handleScroll = () => {
          const currentScrollPos = window.scrollY;
          const headerElement = headerRef.current;
          if (!headerElement) {
            return;
          }
          if (prevScrollPos > currentScrollPos) {
            headerElement.style.transform = "translateY(0)";
          } else {
            headerElement.style.transform = "translateY(-200px)";
          }
          prevScrollPos = currentScrollPos;
        };
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

  return (
    <>
      <Navbar bg="light" expand="lg" as='header' ref={headerRef}>
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
