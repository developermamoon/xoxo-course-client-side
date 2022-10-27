import React from 'react';
import Card from 'react-bootstrap/Card';
import { FaMoneyBillWave, FaStar } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const CourseDetails = () => {
    const data = useLoaderData();

    const {thumbnail_url, title, details, _id, rating, Course_fee} = data;
    return (
        <div className='container d-flex justify-content-center my-3'>
            <Card style={{width: '800px'}}>
                <Card.Img variant="top" src={thumbnail_url} style={{ width: 'auto' }} />
                <Card.Body>
                    <Card.Title className='mb-4'>{title}</Card.Title>
                    <Card.Text>
                        {details.length > 250 ?
                            <>{details.slice(0, 250) + "..."} <Link to={`/course/${_id}`}>Read More</Link></>
                            :
                            <>{details}</>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between'>
                    <div className='d-flex align-items-center'><FaStar className='text-warning'></FaStar> &nbsp; {rating.number}</div>

                    <div className='d-flex align-items-center'><FaMoneyBillWave className='text-success'></FaMoneyBillWave> &nbsp; {Course_fee} taka</div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default CourseDetails;