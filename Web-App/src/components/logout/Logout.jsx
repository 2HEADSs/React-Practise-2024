import { Navigate } from "react-router-dom";
import { useLogout } from "../../hooks/useAuth";

export default function Logout() {
    //firts logout from server, than from browser
    // here is incorrect
    const logout = useLogout();

    logout();

    return <Navigate to="/" />
}