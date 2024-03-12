import Navigation from "../components/Navigation"
import football from "../assets/football.png"

import Profile from "../components/Profile";

const Index = () => {
    const content = 
    (
        <>
            <div className="min-w-screen max-h-screen items-center">
                <Navigation />
                <div className="m-24 flex flex-col items-center justify-center">
                    <h1 className="text-8xl font-bold">FPredictions</h1>    
                    <h2 className="my-3 text-4xl font-bold w-[30ch] text-center">Make your predictions now to earn points and beat your friends</h2>
                    <img src={football} alt="football image" className="w-64 h-64"/>
                </div>

                <div className="py-24 flex flex-col items-center justify-center text-center bg-black">
                    <p className="font-bold text-5xl w-[35ch] text-balance text-white">
                        EVER WANTED TO PROVE YOUR <span className="text-accent">FOOTBALL KNOWLEDGE</span>. THINK YOUR BETTER THAN ALL YOUR FRIENDS. PROVE IT RIGHT <span className="text-accent">NOW</span> 
                    </p>
                    <ul className="pt-10">
                        <li className="text-black bg-white p-5 rounded-lg font-semibold outline outline-black"><a href="#">Click Here to get started</a></li>
                    </ul>
                </div>
                <Profile />                
            </div>        
        </>
    )
// —Pngtree—football players_7078031
    return content
}

export default Index