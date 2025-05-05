import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from './AuthContext';

const PrivateRoute = ({children}) => {

    const {user,loading} =useContext(AuthContext)
    const location = useLocation()
    // console.log(location);
    

    if (loading) {
        return <span className='loading loading-infinity loading-xl'></span>
    }

    if (!user) {
        return <Navigate state={location?.pathname} to="/auth/login"></Navigate>
    }

    return children
};

export default PrivateRoute;