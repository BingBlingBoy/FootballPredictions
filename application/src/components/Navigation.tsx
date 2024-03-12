import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./Login"
import LogoutButton from "./Logout"
import Profile from "./Profile"

const Navigation = () => {
    const { isAuthenticated } = useAuth0();
    const content = 
    (
        <>
            <div className="m-10 px-10">
                <div className="flex justify-between items-center">
                    <h1 className="font-bold text-3xl"><a href="/">FPrediction</a></h1>
                    <ul className="flex flex-row gap-8">
                        <li className="bg-white p-2 rounded-lg font-semibold outline outline-black"><a href="">Leagues</a></li>
                        <li className="bg-white p-2 rounded-lg font-semibold outline outline-black"><a href="">Competitions</a></li>
                        {isAuthenticated &&
                            <div className="bg-white p-2 rounded-lg font-semibold outline outline-black">
                                <Profile />
                            </div>
                        }
                        <div className="bg-white p-2 rounded-lg font-semibold outline outline-black">
                            <LoginButton />
                            <LogoutButton />
                        </div>
                    </ul> 
                </div>
            </div>
        </>
    )
// dev-r567ksx0tomv3cll

    return content
}

export default Navigation