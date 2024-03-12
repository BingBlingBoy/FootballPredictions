import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    
    const viewProfile = () => {
        navigate('/profile')
    }

    return (
        isAuthenticated && (
            <button onClick={() => viewProfile()}>
                Profile
            </button>
        )
    )
};

export default Profile;