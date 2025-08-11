
import type { JSX } from "react";
import { Navigate } from "react-router-dom";

interface Props {
    children: JSX.Element;
}

const PrivateRoute = ({ children }: Props) => {
    const isAuthenticated = !!localStorage.getItem("token");

    return isAuthenticated ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;
