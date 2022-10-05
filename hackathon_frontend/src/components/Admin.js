import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, Card, CardGroup, Row, Col, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from 'axios';
import { AiOutlineLogout } from "react-icons/ai";

const Admin = () => {
  const [organizer, setOrganizer] = useState({})

  var data;
  const getData = () => {
    axios.get('/get-organize')
    .then((res) => {
      data = res.data;
      data.data.map((d) => {
        setOrganizer(d);
      })
      // console.log(data.data)
      console.log(organizer);
    })
    .catch((res) => {
      alert("Error");
    })
  }


  return (
    <div>
      <section className="customer">
        <Navbar
          expand="lg"
          variant="dark"
          className="fixed-top"
          style={{
            backgroundColor: "black",
            boxShadow: "1px 2px 3px",
            color: "white",
            height: 70,
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
                Hello Admin!!!
              </p>
            </Navbar.Collapse>
            <Nav.Link as={Link} to={'/'}><AiOutlineLogout size={40} style={{marginLeft:'10'}}/></Nav.Link>
            
          </Container>
        </Navbar>
      </section>
      <section style={{ marginTop: 100, paddingX: 50 }}>
        <Button onClick={getData} >Fetch</Button>
        <h3>Verified Organizers</h3>
        <Table striped bordered hover variant="light" className="p-3">
          <thead>
            <tr>
              <th>Organizer Name</th>
              <th>Event Type</th>
              <th>Venue</th>
              <th>Date and Time</th>
              <th>Price</th>
              <th>Seats Available</th>
              <th>Cancel Event(By Admin)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Andrew</td>
              <td>Musical Concert</td>
              <td>Phoenix Mall</td>
              <td>12/10/2022,6:00pm</td>
              <td>1000</td>
              <td>10</td>
              <td>
                <Button className="btn-danger">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>{organizer.eventName}</td>
              <td>{organizer.eventType}</td>
              <td>{organizer.venue}</td>
              <td>{organizer.datetime}</td>
              <td>{organizer.cost}</td>
              <td>{organizer.seats}</td>
              {/* <td>
                <Button className="btn-danger">Delete</Button>
              </td> */}
            </tr>

            {/* <tr>
              <td>James</td>
              <td>Theatre Event</td>
              <td>Growels Mall</td>
              <td>22/10/2022,9:00pm</td>
              <td>5000</td>
              <td>100</td>
              <td>
                <Button className="btn-danger">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>Jerry</td>
              <td>Stand up Comedy</td>
              <td>Intercit Mall</td>
              <td>5/10/22,6:00pm</td>
              <td>3000</td>
              <td>50</td>
              <td>
                <Button className="btn-danger">Delete</Button>
              </td>
            </tr>
            <tr>
              <td>Ameesh</td>
              <td>Disco Night</td>
              <td>Greens Mall</td>
              <td>15/10/22,8:00pm</td>
              <td>4000</td>
              <td>50</td>
              <td>
                <Button className="btn-danger">Delete</Button>
              </td>
            </tr> */}
          </tbody>
        </Table>
      </section>
      <section>
        <h3>Verified Customers</h3>
        <Table striped bordered hover variant="light" className="p-3">
          <thead>
            <tr>
              <th>Customer Name</th>
              <th>Event Type</th>
              <th>Venue</th>
              <th>Date and Time</th>
              <th>Paid Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Andrew1</td>
              <td>Musical Concert</td>
              <td>Phoenix Mall</td>
              <td>12/10/2022,6:00pm</td>
              <td>1000</td>
            </tr>
            <tr>
              <td>James1</td>
              <td>Theatre Event</td>
              <td>Growels Mall</td>
              <td>22/10/2022,9:00pm</td>
              <td>5000</td>
            </tr>
            <tr>
              <td>Jerry1</td>
              <td>Stand up Comedy</td>
              <td>Intercit Mall</td>
              <td>5/10/22,6:00pm</td>
              <td>3000</td>
            </tr>
            <tr>
              <td>Ameesh1</td>
              <td>Disco Night</td>
              <td>Greens Mall</td>
              <td>15/10/22,8:00pm</td>
              <td>4000</td>
            </tr>
          </tbody>
        </Table>
      </section>
    </div>
  );
};

export default Admin;
