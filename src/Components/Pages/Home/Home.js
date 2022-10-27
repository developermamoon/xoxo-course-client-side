import React from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import man from '../../../Images/man.png'
import { Image } from 'react-bootstrap';

const Home = () => {
    return (
        <div className=' container my-5 d-md-flex align-items-center justify-content-between'>
            <div>
                <h2 style={{fontSize: '55px'}}>Become A Professional</h2>
                <p>Start, switch, or advance your career with our advanced courses, <br /> get Professional Certificates and get into a Company.</p>
                <Link><Button variant="primary">See courses</Button></Link>
            </div>
            <Image style={{height: '450px'}} fluid src={man}></Image>
        </div>
    );
};

export default Home;