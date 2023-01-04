import { users } from "../db";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <Link to={`users/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default Home;
