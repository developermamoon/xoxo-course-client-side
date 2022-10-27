import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {

    const handleLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(`Email: ${email}\nPassword: ${password}`);
    }

    return (
        <div className='form-parent mx-4 my-4 d-flex justify-content-center'>
            <Form onSubmit={handleLogin}>
                <h2 className='text-center mb-4'>Login</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

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

export default Login;