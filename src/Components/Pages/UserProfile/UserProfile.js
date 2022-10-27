import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Shared/UserContext/UserContext';

const UserProfile = () => {

    const {user} = useContext(AuthContext);
    
    return (
        <div className='form-parent mx-4 my-4 d-flex justify-content-center'>
            <Form>
                <h2 className='text-center mb-4'>User Profile</h2>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Form.Text className="mb-3">
                    <p className='fw-bold'>{}</p>
                </Form.Text>

                <div className='mb-3'>Don't have an account? <Link to='/register'>SignUp</Link></div>
                <div className='text-center'>
                    <Button variant="primary" type="submit" className='w-75 mb-2'>
                        Login
                    </Button>
                    <Button variant="danger" type="submit" className='w-75 mb-2'>
                        Login with Google <FaGoogle></FaGoogle>
                    </Button>
                    <Button variant="warning" type="submit" className='w-75'>
                        Login with GitHub <FaGithub></FaGithub>
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default UserProfile;