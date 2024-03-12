import { useNavigate } from "react-router-dom";

const League = () => {
    const navigate = useNavigate();
    
    const viewProfile = () => {
        navigate('/league')
    }

    return (
        (
            <button onClick={() => viewProfile()}>
                Create/Join League
            </button>
        )
    )
};

export default League;