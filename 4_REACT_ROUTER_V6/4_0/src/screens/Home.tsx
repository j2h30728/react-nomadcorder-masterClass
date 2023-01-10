import { users } from "../db";
import { Link, useSearchParams } from "react-router-dom";
const Home = () => {
  const [readSearchParams, setSearchParams] = useSearchParams();
  console.log(readSearchParams.get("geo"));
  setTimeout(() => {
    setSearchParams({
      day: "today",
      tommorrow: "123",
    });
  }, 3000); // 3초 뒤에 url이
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
