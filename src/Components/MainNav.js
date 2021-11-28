import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../Images/UFlogo.jpg";
import "bootstrap/dist/css/bootstrap.min.css";
import './components.css'

const MainNav = () => {
  return (
    <>
      <Navbar
        bg="light"
        variant="light"
        expand="md"
      >
        <Container>
        <Navbar.Brand href="/" className='navbar-brand'>
        <img
          alt=""
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top nav-image"
        />{' '}
      United Fighters BJJ
      </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/classes">Classes</Nav.Link>
              <Nav.Link href="/membership">Memberships</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MainNav;
