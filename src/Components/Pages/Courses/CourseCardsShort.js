import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Shared/UserContext/UserContext';

const CourseCardsShort = ({course}) => {
    const {_id,thumbnail_url, title, details } = course;
    // console.log(_id, name);
    
    return (
        <div className=''>
            <Card style={{height: '100%'}}>
                <Card.Img variant="top" src={thumbnail_url} style={{width: 'auto'}} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details.length > 250 ?
                            <>{details.slice(0, 250) + "..."} <Link to={`/course/${_id}`}>Read More</Link></>
                            :
                            <>{details}</>
                        }
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

export default CourseCardsShort;