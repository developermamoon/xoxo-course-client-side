import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Shared/UserContext/UserContext';
import './Login.css'

const Login = () => {

    const navigate = useNavigate();
    const location = useLocation();
    
    const from = location.state?.from?.pathname || '/';
    
    const { loginwithEmailPass, loginWithGoogle, loginWithGitHub, message, setMessage } = useContext(AuthContext);



    const handleLogin =(event)=>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(`Email: ${email}\nPassword: ${password}`);

        //loginwith email pass
        loginwithEmailPass(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setMessage("Login Successful !!")
                navigate(from, { replace: true });
                
            })
            .catch(error => {
                console.error("Error: ", error);
                setMessage(error.message);
            })
            

    }

    //sign in with google
    const handleGoogleLogin =()=>{
        loginWithGoogle()
            .then(result => {
                const user = result.user;
                console.log(user);
                setMessage("Login Successful !!");
                navigate(from, { replace: true });
                
            })
            .catch(error => {
                console.error("Error: ", error);
            })
    }

    //sign in with git hub
    const handleLoginWithGitHub = () => {
        loginWithGitHub()
            .then(result => {
                const user = result.user;
                console.log(user);
                setMessage("Login Successful !!")
                navigate(from, { replace: true });
            })
            .catch(error => {
                console.error("Error: ", error);
                setMessage(error.message);
            })
    }

    return (
        <div className='form-parent mx-4 my-4 d-flex justify-content-center'>
            <Form onSubmit={handleLogin}>
                <h2 className='text-center mb-4'>Login</h2>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name='password' type="password" placeholder="Password" />
                </Form.Group>

                <Form.Text className="mb-3">
                    <p className='fw-bold'>{message}</p>
                </Form.Text>

                <div className='mb-3'>Don't have an account? <Link to='/register'>SignUp</Link></div>
                <div className='text-center'>
                    <Button variant="primary" type="submit" className='w-75 mb-2'>
                        Login
                    </Button>
                    
                </div>


                <div className='text-center'>
                    <Button onClick={handleGoogleLogin} variant="danger" className='w-75 mb-2'>
                        Login with Google <FaGoogle></FaGoogle>
                    </Button>
                    <Button onClick={handleLoginWithGitHub} variant="warning" className='w-75'>
                        Login with GitHub <FaGithub></FaGithub>
                    </Button>
                </div>

            </Form>
        </div>
    );
};

export default Login;