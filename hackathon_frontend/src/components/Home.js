import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Carousel from "react-bootstrap/Carousel";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaFacebook, FaTwitter, FaLinkedin, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import MyNavbar from "./MyNavbar";

const Home = () => {
  return (
    <div>
      <section className="nav">
        <MyNavbar />
      </section>

      <section className="carousel"style={{ margin: 10 }}>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://eventective-media.azureedge.net/2893076_lg.jpg"
              alt="First slide"
              style={{ height: 520 }}
            />
            <Carousel.Caption>
              <h3 className="display-3 fw-bold">Theater Event</h3>
              {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.timeout.com/images/101206597/image.jpg"
              alt="Second slide"
              style={{ height: 520 }}
            />

            <Carousel.Caption>
              <h3 className="display-3 fw-bold">Music Event</h3>
              {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://i.guim.co.uk/img/media/ae71051df54f246e1d34fa9bcaea8f4e6fdedb9b/0_133_4000_2400/master/4000.jpg?width=1200&quality=85&auto=format&fit=max&s=12637660caff9bc8a7ef073b148bd6da"
              alt="Third slide"
              style={{ height: 520 }}
            />

            <Carousel.Caption>
              <h3 className="display-3 fw-bold">Comedy Event</h3>
              {/* <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://media.istockphoto.com/photos/large-crowd-people-attend-a-sports-event-stadium-basketball-court-picture-id522738337?k=20&m=522738337&s=170667a&w=0&h=kKyI_YcKmCDqahWg8kdWNKJnm1I57UvAGhwyHlXPmhU="
              alt="Fourth slide"
              style={{ height: 520 }}
            />

            <Carousel.Caption>
              <h3 className="display-3 fw-bold">Sports Event</h3>
              {/* <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p> */}
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </section>
      <section id ="about" className="about p-3">
        {/* <Container> */}
        <Card className="bg-dark text-white text-start fw-bold">
          <Card.Img
            src="https://hire4event.com/blogs/wp-content/uploads/2019/03/Event-management-companies-in-Delhi-NCR.jpg"
            alt="Card image"
            className="w-100"
            style={{ height: 500 }}
          />
          <Card.ImgOverlay>
            <Card.Title
              className="text-center  text-white"
              style={{ fontSize: 70 }}
            >
              About Us
            </Card.Title>
            <Card.Text style={{ marginTop: 170, fontSize: 25 }}>
              Our solutions cater crafted events that are focused majorly on the
              special occasions such as Corporate Events, Conferences &
              Seminars, MICE, Award functions, Media / Press meets, Customer /
              Dealer interaction programs, Brand Extension Exercises, Celebrity
              Management, Live Concerts, Stage Shows, B2B & B2C Events,
              Networking Events, VIP Visits, Trade Promotions & Activations,
              Manpower Lead Activations, Product Launches, Roadshows, Facility
              Inaugurations, Employee Motivation Programs and Residential
              Activations.
            </Card.Text>
            {/* <Card.Text>Last updated 3 mins ago</Card.Text> */}
          </Card.ImgOverlay>
        </Card>
        {/* </Container> */}
      </section>
      <section className="footer">
        <Container
          fluid
          className=" bg-dark mt-5 text-start text-white"
          variant="dark"
        >
          <Row>
            {/* <p className="text-center">GET CONNECTED WITH US ON SOCIAL MEDIA</p> */}
            <div className="text-center" style={{ margin: "20px" }}>
              <a href="http://www.facebook.com" style={{ margin: "10px" }}>
                <FaFacebook />
              </a>
              <a href="http://www.twitter.com" style={{ margin: "10px" }}>
                <FaTwitter />
              </a>
              <a href="http://www.linkedin.com" style={{ margin: "10px" }}>
                <FaLinkedin />
              </a>
              <a href="http://www.youtube.com" style={{ margin: "10px" }}>
                <FaYoutube />
              </a>
            </div>
            <Col sm={4}>
              <h2>ABOUT US</h2>
              <p>
                Created by: <br />
                Shantanu Salvi <br />
                Yash Shah <br />
                Tejas Bhat <br />
                Meghesh Nagpure <br />
              </p>
            </Col>
            <Col sm={4} variant="dark">
              <h2>NAVIGATION</h2>

              <a href="">HOME</a>
              <br />
              <a href="">ORGANIZE</a>
              <br />
              <a href="">TRENDING EVENTS</a>
              <br />
              <a href="">CATEGORIES</a>
              <br />
            </Col>
            <Col sm={4}>
              <h2>COLLEGE</h2>
              <p>DJ Sanghvi College of Engineering</p>
              <p>Vile Parle, Mumbai</p>
              <p>1234567890</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Home;
