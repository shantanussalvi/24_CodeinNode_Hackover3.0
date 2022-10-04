import React from 'react'
import { Button, Form } from 'react-bootstrap'
import '../styles/organizer.css'

const Organizer = () => {
    return (
        <div className="container mt-5">
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
    )
}

export default Organizer