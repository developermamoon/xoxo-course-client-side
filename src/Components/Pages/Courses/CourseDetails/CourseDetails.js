import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaCrown, FaDownload, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const data = useLoaderData();

    const {thumbnail_url, title, details, _id, rating, Course_fee, course_duration, total_view, softwares} = data;
    return (
        <div className='d-flex justify-content-center'>
            <Card style={{ width: '700px' }} className='my-3'>
                
                <Card.Body className=''>

                    <div className='d-flex justify-content-between align-items-center'>
                        <h2>{title}</h2>
                        <FaDownload className='me-3'></FaDownload>
                    </div>


                    <div className='text-center my-4'>
                        <Image style={{ width: '700px' }} fluid src={thumbnail_url}></Image>
                    </div>

                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <h5 className='d-flex align-items-center'>Ratings:&nbsp; <FaStar className='text-warning'></FaStar>{rating.number}</h5>

                        <h5>Course Completed: {total_view} students</h5>
                    </div>
                    <h4>Course Details:</h4>
                    <p>{details}</p>
                    <h4>Tools:</h4>
                    <div className='d-flex justify-content-between align-items-center mb-3'>
                        <h4>Course Fees: {Course_fee} tk</h4>
                        <h5>Course Duration: {course_duration} Months.</h5>
                    </div>
                    
                    
                    <Link to='/cart' style={{ textDecoration: 'none' }}>

                    <Button className='d-flex align-items-center' variant="warning">Buy Premium &nbsp; <FaCrown></FaCrown></Button>
                    
                    </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseDetails;