import React from 'react';

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/ContactPage.css';

import Hero from '../layoouts/Hero';
import Content from '../layoouts/Content';
import Axios from 'axios';

class ContactPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
            disabled: false,
            emailSent: null,
        }
    }


    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }


    handleSubmit = (event) => {
        event.preventDefault();

        console.log(event.target);

        this.setState({
            disabled: true
        });

        Axios.post('http://localhost:3030/api/email', this.state)
            .then(res => {
                if (res.data.success) {
                    this.setState({
                        disabled: false,
                        emailSent: true
                    });
                } else {
                    this.setState({
                        disabled: false,
                        emailSent: false
                    });
                }
            })
            .catch(err => {
                console.log(err);

                this.setState({
                    disabled: false,
                    emailSent: false
                });
            })

    }


    render() {
        return (
            <div className="Container_contact-form">
                <h1 className="page_h1 contact_h1">Contact</h1>
                <div className="Contact__Details">
                    Exquisite foods distributor limited
                    <br></br>
                    Company reg.12143850
                    <br></br>
                    Mobile contact: 07375081408
                        <br></br>

                </div>
                <Hero title={this.props.title} />

                <Content>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group>
                            <Form.Label className="Contact__Details" htmlFor="full-name">Full Name</Form.Label>
                            <br></br>
                            <Form.Control className="input-name" id="full-name" name="name" type="text" value={this.state.name} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group>
                            <Form.Label className="Contact__Details" htmlFor="email">Email</Form.Label>
                            <br></br>
                            <Form.Control className="input-email" id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange} />
                        </Form.Group>


                        <Form.Group className="contact textarea">
                            <Form.Label htmlFor="message" className="Contact__Details">Message</Form.Label>
                            <Form.Control id="message" name="message" as="textarea" rows="3" value={this.state.message} onChange={this.handleChange} />
                        </Form.Group>


                        <Button className="primary-button" variant="primary" type="submit" disabled={this.state.disabled}>
                            Send
                        </Button>


                        {this.state.emailSent === true && <p className="Send-message">Email Sent</p>}
                        {this.state.emailSent === false && <p className="Send-message">Email Not Sent</p>}
                    </Form>
                </Content>
            </div>
        );
    }

}

export default ContactPage;