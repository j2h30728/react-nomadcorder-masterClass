//Chart component : 보고자 하는 가격의 암호화폐가 무엇인지 봐야함
import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory } from "../api";
import { useOutletContext } from "react-router-dom";
import ApexChart from "react-apexcharts";

interface ChartProps {
  coinId: string;
}
interface IHistorical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}
export default function Chart() {
  const { coinId } = useOutletContext<ChartProps>();
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "Price",
              data: data?.map(price => parseFloat(price.close)) as number[],
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: {
                show: false,
              },
              background: "trnasparse",
            },
            stroke: {
              curve: "smooth",
            },
            grid: {
              show: false,
            },
            xaxis: {
              labels: {
                show: false,
              },
            },
            yaxis: {
              labels: {
                show: false,
              },
            },
          }}
        />
      )}
    </div>
  );
}
