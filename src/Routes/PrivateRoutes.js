import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import UserContext, { AuthContext } from '../Components/Shared/UserContext/UserContext';
import Spinner from 'react-bootstrap/Spinner';

const PrivateRoutes = ({children}) => {

    const {user, loading} = UserContext(AuthContext);
    const location = useLocation(); //get the location before going to login page
    
    if(loading){
        return <Spinner animation="border" variant="primary" />;
    }

    if(!user){
        return <Navigate to='/login' state={{from: location}} replace></Navigate>
    }
    return children;
};

export default PrivateRoutes;