import React, { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return (
            <div>
                <button className="btn loading">loading</button>
            </div>
        );
    }

    if (user) {
        return children;
    }
    return <Navigate to="/login"></Navigate>;
};

export default PrivateRoute;
