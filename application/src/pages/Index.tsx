import football from "../assets/football.png"
import trophy from "../assets/trophy.jpg"
import League from "../components/League"
import { useAuth0 } from "@auth0/auth0-react"

const Index = () => {
    const { isAuthenticated } = useAuth0()

    const content = 
    (
        <>
            <div className="min-w-screen max-h-screen items-center">
                <div className="m-24 flex flex-col items-center justify-center">
                    <h1 className="text-8xl font-bold">FPredictions</h1>    
                    <h2 className="my-3 text-4xl font-bold w-[30ch] text-center">Make your predictions now to earn points and beat your friends</h2>
                    <img src={football} alt="football image" className="w-64 h-64"/>
                </div>

                <div className="py-24 flex flex-col items-center justify-center text-center bg-black">
                    {isAuthenticated ? 
                        <>
                            <div className="grid grid-rows-2 gap-4 w-full h-full">
                                <div className="flex items-center justify-center flex-row mx-52 text-center">

                                    <div className="w-full h-full flex items-center justify-center flex-col bg-white">
                                        <h2 className="font-bold text-3xl">Create or Join a league</h2>
                                        <p className="py-8 px-24 text-balance"> 
                                            Take on friends and family on a battle who determine who is the best. 
                                            <span className="text-accent font-semibold"> Create</span> or <span className="text-accent font-semibold"> join</span> leagues against them and become the best.
                                        </p>
                                        <League />

                                    </div>
                                    <div className="w-full h-full bg-secondary">
                                        <img src={trophy} alt="football image" className="items-center"/>
                                    </div>
                                </div>
                                
                                <div className="flex items-center justify-center flex-row">

                                    <div className="w-32 h-32 bg-secondary">

                                    </div>
                                    <div className="w-32 h-32 bg-white">

                                    </div>
                                </div>
                            </div>
                        </>
                        :
                        <>
                            <p className="font-bold text-5xl w-[35ch] text-balance text-white">
                                EVER WANTED TO PROVE YOUR <span className="text-accent">FOOTBALL KNOWLEDGE</span>. THINK YOUR BETTER THAN ALL YOUR FRIENDS. PROVE IT RIGHT <span className="text-accent">NOW</span> 
                            </p>

                            <ul className="pt-10">
                                <li className="text-black bg-white p-5 rounded-lg font-semibold outline outline-black"><a href="#">Click Here to get started</a></li>
                            </ul>
                        </>
                    }       
                </div>
            </div>        
        </>
    )
// —Pngtree—football players_7078031
    return content
}

export default Index
