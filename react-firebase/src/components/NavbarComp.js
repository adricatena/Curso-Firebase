import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "../logo.png";

export const NavbarComp = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          React-Firebase
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Create Room</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};
