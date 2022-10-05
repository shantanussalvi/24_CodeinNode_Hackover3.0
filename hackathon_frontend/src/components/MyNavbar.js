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
          <Navbar.Brand className="m-2 mx-4 fw-bold">
            <img
              src="https://bookmyevent.co.za/wp-content/uploads/2020/04/cropped-Logo-header-6.png"
              height={42}
              as={Link} to={"/"}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse
            id="basic-navbar-nav"
            className="justify-content-end"
          >
            <Nav className="mx-5 fw-bold">
              {/* <Nav.Link as={Link} to={"/"} href="#home">
                HOME
              </Nav.Link> */}
              
              {/* <Nav.Link as={Link} to={"/trending"} href="#trending">
                TRENDING EVENTS
              </Nav.Link> */}
              {/* <Nav.Link className= "nav-link scrollto" as={Link}  href="#about">
              ABOUT US
              </Nav.Link> */}
              <a className="nav-link scrollto" href="#about">ABOUT US</a>
              <Nav.Link as={Link} to={"/loginadmin"} href="#categories">
              ADMIN LOGIN
              </Nav.Link>
              <Nav.Link as={Link} to={"/login"} href="#organize">
                ORGANIZE EVENT
              </Nav.Link>
              <Nav.Link as={Link} to={"/logincustomer"} href="#categories">
               CUSTOMER LOGIN
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyNavbar;
