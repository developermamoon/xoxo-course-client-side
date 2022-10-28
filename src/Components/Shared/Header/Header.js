import React, { useState } from 'react';
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
import { FaMoon, FaSun, FaToggleOff, FaToggleOn } from 'react-icons/fa';

const Header = () => {

    const [toggle, setToggle] = useState(true);

    const darkMode = () => {
        setToggle(false);
    }
    const lightMode = () => {
        setToggle(true);
    }


    const { user, logOut, setMessage } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => {
                setMessage("");
            })
            .catch(error => {
                console.error("Error: ", error);
                console.log(error.message)
            })
    }

    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container>
                <Navbar.Brand><Link to='/' className='brandName d-flex'>
                    <Image className='logo' src={logo} fluid></Image>
                    <div>XOXO Course</div></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className="ms-auto">
                        <div className='navs m-0'><Link className='m-2 m-lg-0 me-lg-3' to='/courses'>Courses</Link></div>
                        <div className='navs'><Link className='m-2 m-lg-0 me-lg-3' to='/FAQ'>FAQ</Link></div>
                        <div className='navs'><Link className='m-2 m-lg-0 me-lg-3' to='/blogs'>Blogs</Link></div>

                        {/* <div className='navs'><Link className='m-2 m-lg-0 me-lg-3' to=''>Toogle Theme</Link></div> */}
                        {
                            !toggle ?
                                <div className='toggleMode fs-4' onClick={lightMode}><FaToggleOff></FaToggleOff>&nbsp;<FaSun></FaSun></div>
                                :
                                <div className='toggleMode fs-4' onClick={darkMode}><FaToggleOn></FaToggleOn>&nbsp;<FaMoon></FaMoon></div> 

                                
                        }


                        {user?.uid ?
                            <>
                                <Button onClick={handleLogOut} className='m-2 m-lg-0 me-lg-3'>Logout</Button>

                                <Link to='/userProfile'><Image data-tip={user?.displayName} fluid roundedCircle style={{ height: '40px' }} src={user?.photoURL}></Image><ReactTooltip /></Link>
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