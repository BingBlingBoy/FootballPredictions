import { useAuth0 } from "@auth0/auth0-react";
// import { useConvexAuth } from "convex/react";

const League = () => {
    
    const { isAuthenticated } = useAuth0();
    const content =
    (
      <>
        {isAuthenticated && (
            <p>League of Legends</p>
        )}
      </>
    )

    return content
}

export default League 