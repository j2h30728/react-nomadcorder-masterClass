//Chart component : 보고자 하는 가격의 암호화폐가 무엇인지 봐야함
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import { useOutletContext } from "react-router-dom";
interface ChartProps {
  coinId: string;
}
export default function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  console.log(coinId);
  const { isLoading, data } = useQuery(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return <h1>data</h1>;
}
