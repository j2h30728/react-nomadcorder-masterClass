import { Link, Outlet, useParams, useOutletContext } from "react-router-dom";
import { users } from "../../db";

const User = () => {
  const { userId } = useParams();
  console.log(useOutletContext()); // {darkMode: true}
  return (
    <div>
      <h1>
        User with id {userId} is name : {users[Number(userId) - 1].name}
      </h1>
      <hr />
      <Link to="followers">See followers</Link>
      <Outlet context={{ nameOfMyUser: users[Number(userId) - 1].name }} />
    </div>
  );
};
export default User;
