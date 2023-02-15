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
  const lineChart = useQuery<IHistorical[]>(
    ["ohlcv", coinId],
    () => fetchCoinHistory(coinId),
    {
      refetchInterval: 10000, //10초마다 refetching
    }
  );
  const candleStick = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      <ApexChart
        type="line"
        series={[
          {
            name: "Price",
            data: lineChart.data?.map(price =>
              parseFloat(price.close)
            ) as number[],
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
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
              show: false,
            },
            type: "datetime",
            categories: lineChart.data?.map(price =>
              new Date(price.time_close * 1000).toISOString()
            ),
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
          fill: {
            type: "gradient",
            gradient: {
              gradientToColors: ["navy"],
              stops: [0, 100],
            },
          },
          colors: ["yellow"],
          tooltip: {
            y: {
              formatter: value => `$${value.toFixed(1)}`,
            },
          },
        }}
      />
      <ApexChart
        type="candlestick"
        series={[
          {
            data: candleStick.data?.map(price => [
              price.time_close * 1000,
              parseFloat(price.open),
              parseFloat(price.high),
              parseFloat(price.low),
              parseFloat(price.close),
            ]) as number[][],
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
          plotOptions: {
            candlestick: {
              colors: {
                upward: "#00cec9",
                downward: "#e17055",
              },
            },
          },
          grid: {
            show: false,
          },
          xaxis: {
            axisBorder: { show: false },
            axisTicks: { show: false },
            labels: {
              show: false,
            },
            type: "datetime",
            categories: candleStick.data?.map(price =>
              new Date(price.time_close * 1000).toISOString()
            ),
          },
          yaxis: {
            labels: {
              show: false,
            },
          },
          tooltip: {
            y: {
              formatter: value => `$${value}`,
            },
          },
        }}
      />
    </div>
  );
}
