import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';
import './Header.css'

const Header = () => {
    const {user} = useContext(AuthContext);


    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container>
                <Navbar.Brand><Link to='/' className='brandName'>XOXO Course</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ms-auto">
                        <div className='navs m-0'><Link className='m-2 m-lg-0 me-lg-3' to='/courses'>Courses</Link></div>
                        <div className='navs'><Link className='m-2 m-lg-0 me-lg-3' to='/FAQ'>FAQ</Link></div>
                        <div className='navs'><Link className='m-2 m-lg-0 me-lg-3' to='/blogs'>Blogs</Link></div>
                        <div className='navs'><Link className='m-2 m-lg-0 me-lg-3' to=''>Toogle Theme</Link></div>

                        <p>{user.displayName}</p>

                        <Button className='m-2 m-lg-0 me-lg-3'><Link to='/login'>Login</Link></Button>

                        <Button className='m-2 m-lg-0 me-lg-3'><Link to='/register'>SignUp</Link></Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;