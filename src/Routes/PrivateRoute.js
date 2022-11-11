import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Components/Shared/UserContext/UserContext';
import Spinner from 'react-bootstrap/Spinner';
import { useContext } from 'react';

const PrivateRoute = ({children}) => {

    const {user, loading} = useContext(AuthContext);
    const location = useLocation(); //get the location before going to login page
    
    if(loading){
        return <Spinner animation="border" variant="primary" />;
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoute;