import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import UseRole from '../../Hooks/UseRole/UseRole';
import { Navigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';

const SellerRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isRole, isRoleLoading] = UseRole();
    const location = useLocation();

    if (loading || isRoleLoading) {
        return <span className="loading loading-spinner text-warning loading-lg"></span>
    }

    if (user && isRole === "seller") {
        return children;
    }


    if (!user && isRole === "seller") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...Unauthorised',
            text: 'Please Login First',

        })

        return <Navigate state={{ from: location }} to="/login" replace></Navigate>
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default SellerRoutes;