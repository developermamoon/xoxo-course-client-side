import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import man from '../../../Images/home.png'
import { Image } from 'react-bootstrap';
import './Home.css'
import { FaAngleRight } from 'react-icons/fa';

const Home = () => {
    return (
        <div className='container text-center text-md-start my-5 d-md-flex align-items-center justify-content-between'>
            <div className='mb-5 mb-md-0'>
                <h2 style={{fontSize: '55px'}}>Become A Professional</h2>
                <p>Start, switch, or advance your career with our advanced courses, <br /> get Professional Certificates and get into a Company.</p>
                <Link to='/courses'><Button variant="danger">See courses <FaAngleRight></FaAngleRight> </Button></Link>
            </div>
            <Image className='home-image' fluid src={man}></Image>
        </div>
    );
};

export default Home;