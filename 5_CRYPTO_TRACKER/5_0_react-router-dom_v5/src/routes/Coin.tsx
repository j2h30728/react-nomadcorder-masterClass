import { useParams } from "react-router-dom";

interface IRouterParams {
  coinId: string;
}
function Coin() {
  const { coinId } = useParams<IRouterParams>();
  console.log(coinId);
  return <h1>Coin : {coinId}</h1>;
}

export default Coin;
