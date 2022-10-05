import React from "react";
import MyNavbar from "./MyNavbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Card, CardGroup, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

const Customer = () => {
  return (
    <div style={{ backgroundColor: "black" }}>
      <section className="customer">
        <Navbar
          expand="lg"
          variant="dark"
          className="fixed-top"
          style={{
            backgroundColor: "black",
            boxShadow: "1px 2px 3px",
            color: "white",
          }}
        >
          <Container>
            <Navbar.Brand
              as={Link}
              to={"/"}
              
              className="fw-bold"
              style={{ marginLeft: 0 }}
            >
              <img
                src="https://bookmyevent.co.za/wp-content/uploads/2020/04/cropped-Logo-header-6.png"
                height={60}
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <p
                className="text-center text-white mx-auto fw-bold"
                style={{ fontSize: 25 }}
              >
                Hello Customer!!!
              </p>
            </Navbar.Collapse>
            <CgProfile size={40} />
          </Container>
        </Navbar>
      </section>
      <section className="p-5">
        <Container>
          <p
            className="text-start lead fw-bold text-white"
            style={{ paddingTop: 60, fontSize: 40,marginTop:30 }}
          >
            Latest Events from Organizers!!!
          </p>
          {/* <span
            className="fw-bold"
            style={{
              fontSize: 40,
              backgroundColor: "#FFFF00",
              alignItems: "left",
            }}
          >
            Schedule
          </span> */}
        </Container>
      </section>
      {/* <section className="buttons p-2">
        <Button variant="primary">Music</Button>{" "}
        <Button variant="primary">Theatre</Button>{" "}
        <Button variant="primary">Comedy</Button>{" "}
      </section> */}
      <section className="card p-2" style={{ backgroundColor: "black" }}>
        <Container fluid className="mt-4">
          <Row xs={1} sm={2} md={4}>
            <Col xs={1} sm={2} md={2} lg={3} className="flex-grow-2">
              <Card
                style={{ width: "20rem", height: "32rem", cursor: "pointer" }}
                className="m-2"
              >
                <Card.Img
                  variant="top"
                  height={180}
                  width={180}
                  src="https://cdn0.weddingwire.in/vendor/3007/3_2/960/jpg/rock-music-event1_15_163007-163973098155561.jpeg"
                />
                <Card.Body>
                  <Card.Title>Musical Concert</Card.Title>
                  <Card.Body className="text-start">
                    <p>Organizer:Andrew</p>
                    <p>Venue:Phoenix Mall</p>
                    <p>Date:12/10/22 Time:6:00pm</p>
                    <p>Price:Rs.1000</p>
                    <p>Seats Available:10</p>
                    <Button variant="primary" className="p-2">
                      BOOK NOW
                    </Button>
                  </Card.Body>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: "20rem", height: "32rem", cursor: "pointer" }}
                className="m-2"
              >
                <Card.Img
                  variant="top"
                  height={180}
                  width={180}
                  src="https://www.apollotheater.org/app/uploads/2022/05/Amateur-Night-Ad-scaled.jpg"
                />
                <Card.Body>
                  <Card.Title>Theatre Event</Card.Title>
                  <Card.Body className="text-start">
                    <p>Organizer:James</p>
                    <p>Venue:Growels Mall</p>
                    <p>Date:22/10/22 Time:9:00pm</p>
                    <p>Price:Rs.5000</p>
                    <p>Seats Available:100</p>
                    <Button variant="primary" className="p-2">
                      BOOK NOW
                    </Button>
                  </Card.Body>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: "20rem", height: "32rem", cursor: "pointer" }}
                className="m-2"
              >
                <Card.Img
                  variant="top"
                  height={180}
                  width={180}
                  src="https://media.istockphoto.com/vectors/neon-comedy-show-sign-with-retro-microphone-on-a-brick-wall-humor-vector-id898400586?k=20&m=898400586&s=612x612&w=0&h=MEWgjCvxW1zNp9H86XcAvLzP1oO3mi_TJ_eQ_CfS0KI="
                />
                <Card.Body>
                  <Card.Title>Stand Up Comedy</Card.Title>
                  <Card.Body className="text-start">
                    <p>Organizer:Jerry</p>
                    <p>Venue:Intercit Mall</p>
                    <p>Date:5/10/22 Time:6:00pm</p>
                    <p>Price:Rs.3000</p>
                    <p>Seats Available:50</p>
                    <Button variant="primary" className="p-2">
                      BOOK NOW
                    </Button>
                  </Card.Body>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card
                style={{ width: "20rem", height: "32rem", cursor: "pointer" }}
                className="m-2"
              >
                <Card.Img
                  variant="top"
                  height={180}
                  width={180}
                  src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bXVzaWMlMjBldmVudHxlbnwwfHwwfHw%3D&w=1000&q=80"
                />
                <Card.Body>
                  <Card.Title>DISCO NIGHT</Card.Title>
                  <Card.Body className="text-start">
                    <p>Organizer:Ameesh</p>
                    <p>Venue:Greens Mall</p>
                    <p>Date:15/10/22 Time:8:00pm</p>
                    <p>Price:Rs.4000</p>
                    <p>Seats Available:50</p>
                    <Button variant="primary" className="p-2">
                      BOOK NOW
                    </Button>
                  </Card.Body>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Customer;
