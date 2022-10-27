import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { AuthContext } from '../UserContext/UserContext';
import './Header.css'
import logo from '../../../Images/online-course.png'
import ReactTooltip from 'react-tooltip';

const Header = () => {
    const { user , logOut } = useContext(AuthContext);

    const handleLogOut=()=>{
        logOut()
        .then(()=>{})
        .catch(error=>{
            console.error("Error: ",error);
            console.log(error.message)
        })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container>
                <Navbar.Brand><Link to='/' className='brandName d-flex'>
                    <Image className='logo' src={logo} fluid></Image>
                    <div>XOXO Course</div></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ms-auto">
                        <div className='navs m-0'><Link className='m-2 m-lg-0 me-lg-3' to='/courses'>Courses</Link></div>
                        <div className='navs'><Link className='m-2 m-lg-0 me-lg-3' to='/FAQ'>FAQ</Link></div>
                        <div className='navs'><Link className='m-2 m-lg-0 me-lg-3' to='/blogs'>Blogs</Link></div>
                        <div className='navs'><Link className='m-2 m-lg-0 me-lg-3' to=''>Toogle Theme</Link></div>


                        {user?.uid ? 
                            <>
                                <Button onClick={handleLogOut} className='m-2 m-lg-0 me-lg-3'>Logout</Button>

                                <Image data-tip={user?.displayName} fluid roundedCircle style={{ height: '40px' }} src={user?.photoURL}></Image><ReactTooltip />
                            </>
                            :
                            <>
                                <Button className='m-2 m-lg-0 me-lg-3'><Link to='/login'>Login</Link></Button>

                                <Button className='m-2 m-lg-0 me-lg-3'><Link to='/register'>SignUp</Link></Button>
                            </>
                        }
                        

                        

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;