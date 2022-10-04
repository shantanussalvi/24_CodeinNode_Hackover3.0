import React from 'react'
import { Button, Container, Form, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import MyNavbar from '../components/MyNavbar'
import '../styles/organizer.css'
import { CgProfile } from "react-icons/cg";

const Organizer = () => {

    return (
        <>
            <section className="customer">
        <Navbar
          expand="lg"
          variant="dark"
          className="sticky-top"
          style={{ backgroundColor: "black",boxShadow: '1px 2px 3px',
          color: 'white'}}
        >
          <Container>
            <Navbar.Brand
              href="#home"
              className="fw-bold"
              style={{ marginLeft: 0 }}
            >
              <img src="https://bookmyevent.co.za/wp-content/uploads/2020/04/cropped-Logo-header-6.png" height={60} />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Button
                className="text-center text-white ms-auto fw-bold" variant="secondary"
                style={{ fontSize: 15}} as={Link} to={"/organize/status"}
              >
                Application Status
              </Button>
            </Navbar.Collapse>
            <CgProfile className="ms-3" size={40}/>
          </Container>
        </Navbar>
      </section>
            <div className="container mt-5 org-form">
                <div className='row'>
                    <h3>Organize A New Event</h3>
                    <p>To organize an event, please fill the following form</p>
                </div>
                <div className='row'>
                    <div className='col-md-6'>
                        <Form>
                            <Form.Select>
                                <option>Event Type</option>
                                <option value="th">Theatre Event</option>
                                <option value="mu">Music Event</option>
                                <option value="co">Comedy Event</option>
                                <option value="sp">Sports Event</option>
                            </Form.Select>

                            <Form.Group className="mt-3" controlId="eventName">
                                <Form.Label>Event Name: </Form.Label>
                                <Form.Control type="text" placeholder="Enter Event Name" />
                            </Form.Group>

                            <Form.Group className="mt-3" controlId="eventName">
                                <Form.Label>Venue: </Form.Label>
                                <Form.Control type="text" placeholder="Enter Event Location" />
                            </Form.Group>

                            <Form.Group className="mt-3" controlId="eventName">
                                <Form.Label>Documents: </Form.Label>
                                <Form.Control type="file" placeholder="Enter Event Location" />
                            </Form.Group>

                            <Form.Group className="mt-3" controlId="eventName">
                                <Form.Label>Ticket structure: </Form.Label>
                                <Form.Select>
                                    <option>Ticket Type</option>
                                    <option value="std">Standard</option>
                                    <option value="vip">Premium</option>
                                </Form.Select>
                                <Form.Control type="number" placeholder="Cost" />
                                <Form.Control type="number" placeholder="Seats" />
                                <Button variant="warning" className="mt-3">Add</Button>
                            </Form.Group>

                            <Button variant="primary" type="submit" className="mt-3">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Organizer