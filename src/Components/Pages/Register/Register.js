import React from 'react';
import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import { AuthContext } from '../../Shared/UserContext/UserContext';

const Register = () => {

    
    const { registerWithEmailPass, loginWithGoogle, loginWithGitHub, message, setMessage } = useContext(AuthContext);


    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const imageURL = form.imageURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(`Email: ${email}\nPassword: ${password}\nName: ${name}\nImageURL: ${imageURL}`);

        registerWithEmailPass(email,password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            form.reset();
            setMessage("Registration Successful !!");
            // return <Navigate to='/login'></Navigate>
        })
        .catch(error=>{
            console.error("Error: ",error);
            setMessage(error.message);
        })
    }

    const handleRegisterWithGoogle = ()=>{
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                setMessage("Registration Successful !!")
            })
            .catch(error => {
                console.error("Error: ", error);
                setMessage(error.message);
            })
    }

    const handleRegisterWithGitHub = ()=>{
        loginWithGitHub()
            .then(result => {
                const user = result.user;
                console.log(user);
                setMessage("Registration Successful !!");
                <Navigate to='/login'></Navigate>
            })
            .catch(error => {
                console.error("Error: ", error);
                setMessage(error.message);
            })
    }

    return (
        <div className='form-parent mx-4 my-4 d-flex justify-content-center'>
            <Form onSubmit={handleLogin}>
                <h2 className='text-center mb-4'>SignUp</h2>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control name='imageURL' type="text" placeholder="Your Image URL" />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" required />
                </Form.Group>

                <Form.Text className="mb-3" >
                    <p className='fw-bold'>{message}</p>
                </Form.Text>

                <div className='mb-3'>Already have an account? <Link to='/login'>Login</Link></div>
                <div className='text-center'>
                    <Button variant="primary" type="submit" className='w-75 mb-2'>
                        SignUp
                    </Button>
                    <Button onClick={handleRegisterWithGoogle} variant="danger" type="submit" className='w-75 mb-2'>
                        SignUp with Google <FaGoogle></FaGoogle>
                    </Button>
                    <Button onClick={handleRegisterWithGitHub} variant="warning" type="submit" className='w-75'>
                        SignUp with GitHub <FaGithub></FaGithub>
                    </Button>
                </div>
            </Form>
        </div>
    );
};

export default Register;