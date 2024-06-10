import { useContext } from "react";
import UserContext from "../context/UserContext.js";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) {
    return <div>Plaese Login</div>;
  }

  return <div>Welcom {user.username}</div>;
}

export default Profile;
