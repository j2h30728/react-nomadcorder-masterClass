import { useOutletContext } from "react-router-dom";

interface IFollowersContext {
  nameOfMyUser: string;
}

function Followers() {
  //   console.log(useOutletContext()); =? {nameOfMyUser: 'lynn'}
  const { nameOfMyUser } = useOutletContext<IFollowersContext>();
  return <h1>Here are {nameOfMyUser}의 followers</h1>;
}

export default Followers;
