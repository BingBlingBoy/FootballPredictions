import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
// import { useConvexAuth } from "convex/react";

const League = () => {

  const getData = async () => {
    const response = await fetch(
      'http://api.balldontlie.io/v1/teams',
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          "Authorization": "7f1dec80-de9c-4d5b-a078-f9f6a9a682f4"
        }
      }
    )
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const data = await response.json()
    console.log(data)
    return response.json() 
  } 
  const { data } = useQuery({queryKey: ['random fact'], queryFn: getData});

  useEffect(() => {
    console.log(data)
  }, [])

  const { isAuthenticated } = useAuth0();
  const content =
    (
      <>

          <div className="min-w-screen items-center">
              <div className="flex flex-col items-center justify-center bg-black">
                  <div className="text-white font-bold my-20">
                      <h1 className="text-8xl">FPredictions</h1>    
                      <h2 className="my-3 text-4xl w-[30ch] text-center">Make your predictions now to earn points and beat your friends</h2>
                  </div>
              </div>
          </div>
          {isAuthenticated && (
              <p>League of Legends</p>
          )}
      </>
    )

  return content
}

export default League 