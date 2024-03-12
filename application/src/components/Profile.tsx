import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    
    return (
        isAuthenticated && (
            <button onClick={() => navigate("/profile")}>
                Profile
            </button>
        )
    )
};

export default Profile;