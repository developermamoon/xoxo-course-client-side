import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="info" variant="dark">
            <Container>
                <Navbar.Brand><Link to='/'>XOXO Course</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ms-auto">
                        <Nav.Link href="#features">Courses</Nav.Link>
                        <Nav.Link href="#pricing">FAQ</Nav.Link>
                        <Nav.Link href="#pricing">Blog</Nav.Link>
                        <Nav.Link href="#pricing">Toogle Theme</Nav.Link>
                        <Nav.Link href="#pricing">User/login</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets">More deets</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Dank memes
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;