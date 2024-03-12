import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const League = () => {
    const { isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    
    const viewProfile = () => {
        navigate('/league')
    }

    return (
        isAuthenticated && (
            <button onClick={() => viewProfile()}>
                Create/Join League
            </button>
        )
    )
};

export default League;