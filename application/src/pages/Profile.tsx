import { useAuth0 } from "@auth0/auth0-react";
import Navigation from "../components/Navigation";

const Profile = () => {
    
    const { user, isAuthenticated } = useAuth0();
    const content =
    (
      <>
        <Navigation /> 
        {isAuthenticated && (
          <div>
            <img src={user?.picture} alt={user?.name} />
            <h2>{user?.name}</h2>
            <p>{user?.email}</p>
          </div>
        )}
      </>
    )

    return content
}

export default Profile