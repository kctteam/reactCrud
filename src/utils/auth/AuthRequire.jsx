import { Navigate, useLocation } from "react-router-dom";
import { getToken } from "../../storage/Token";

const AuthRequire = ({ children }) => {
    const token = getToken();
    let location = useLocation();
    if (!token) {
        return <Navigate to={"/login"} state={{ from: location }} replace />;
    }
    return <>{children}</>;
};

export default AuthRequire;
