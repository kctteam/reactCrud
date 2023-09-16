import { Navigate, useLocation } from "react-router-dom";
import { getToken } from "../../storage/Token";

const AuthNo = ({ children }) => {
    const token = getToken();
    let location = useLocation();
    if (token) {
        return <Navigate to={"/reception"} state={{ from: location }} replace />;
    }
    return <>{children}</>;
};

export default AuthNo;
