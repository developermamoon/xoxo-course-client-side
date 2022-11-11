import React from 'react';
import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaMoneyBill, FaMoneyBillWave, FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';

const Cart = () => {
    const data = useLoaderData();
    const { thumbnail_url, title, details, _id, rating, Course_fee, course_duration, total_view } = data;
    return (
        <div className='container mt-5 d-flex justify-content-center'>
            <Card style={{ width: '30rem' }}>
                <Card.Body>
                    <Card.Title className=''>{title}</Card.Title>
                    <Image className='my-3' fluid src={thumbnail_url} ></Image>
                    <div className=''>
                        <div>
                            <Card.Text>
                                <span><b>Course Id: </b>{_id}</span>

                                <span className='d-flex align-items-center'><b>Ratings:</b> &nbsp;<FaStar className='text-warning'></FaStar>{rating.number}</span>

                                <span className='d-flex align-items-center'><b>Course Fee:</b> &nbsp;<FaMoneyBillWave className='text-success'></FaMoneyBillWave> &nbsp;{Course_fee} taka</span>

                                <span><b>Course Duration: </b>{course_duration} Months</span> <br />

                                <span><b>Course Completed: </b>{total_view} students.</span>
                            </Card.Text>
                            <Button variant="primary">Buy Now</Button>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Cart;