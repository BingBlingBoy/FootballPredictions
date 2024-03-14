import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import getDate from "../utils/date";
import useStoreUserEffect from "../hooks/useStoreUserEffect";

const League = () => {

  const getData = async () => {
    
    const date = getDate();
    return await fetch(
      `http://api.balldontlie.io/v1/games?dates[]=${date}`,
      {
        method: 'GET',
        mode: 'cors',
        headers: {
          "Authorization": "7f1dec80-de9c-4d5b-a078-f9f6a9a682f4"
        }
      }
    ).then((res) => res.json())
  } 
  
  const { data: info, isFetching } = useQuery({queryKey: ['random fact'], queryFn: getData,});

  useEffect(() => {
    console.log(info)
  }, [getData()])

  const { isAuthenticated } = useAuth0();
  const user = useStoreUserEffect();


  const content =
    (
      <>

          <div className="min-w-screen items-center">
              <div className="bg-white">
                <h1 className="text-xl font-semibold">You are currently in: 0 leagues</h1>
                {
                  <p>Stored user id: {user}</p>
                }
              </div>

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
          
            {
              isFetching ? ( 
                <div className="bg-teal-500 w-96 h-96">
                </div>
              ) :
              (
                <div className="bg-white w-96 h-96">
                  {info?.data?.map((yes: any, key: any) => (
                    <p key={key} className="text-3xl font-black font-bold">{yes.id}</p>
                  ))}
                </div>
              )
            }
        </>
    )

  return content
}

export default League 