import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    
    const viewProfile = () => {
        navigate('/')
    }

    return (
        (
            <button className="font-bold text-3xl" onClick={() => viewProfile()}>
                FPrediction
            </button>
        )
    )
};

export default Home;