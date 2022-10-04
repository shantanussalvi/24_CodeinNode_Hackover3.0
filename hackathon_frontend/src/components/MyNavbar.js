import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

const MyNavbar = () => {
  return (
    <div>
      <Navbar
        expand="lg"
        variant="dark"
        className="sticky-top"
        style={{ backgroundColor: "black", width: "100vw" }}
      >
        <Container>
          <Navbar.Brand href="#home" className="m-2 mx-4 fw-bold">
            <img
              src="https://bookmyevent.co.za/wp-content/uploads/2020/04/cropped-Logo-header-6.png"
              height={60}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mx-5 fw-bold">
              <Nav.Link as={Link} to={"/home"} href="#home">
                HOME
              </Nav.Link>
              <Nav.Link as={Link} to={"/organize"} href="#organize">
                ORGANIZE
              </Nav.Link>
              <Nav.Link as={Link} to={"/trending"} href="#trending">
                TRENDING EVENTS
              </Nav.Link>
              <Nav.Link as={Link} to={"/categories"} href="#categories">
                CATEGORIES
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
