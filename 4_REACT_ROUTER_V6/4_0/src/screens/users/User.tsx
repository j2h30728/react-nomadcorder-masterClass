import { useParams } from "react-router-dom";
import { users } from "../../db";

const User = () => {
  const { userId } = useParams();
  return (
    <h1>
      User with id {userId} is name : {users[Number(userId) - 1].name}
    </h1>
  );
};
export default User;
