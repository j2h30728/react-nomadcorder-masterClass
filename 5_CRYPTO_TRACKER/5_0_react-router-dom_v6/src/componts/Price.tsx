import { useOutletContext } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  HiOutlineTrendingUp,
  HiOutlineTrendingDown,
  HiOutlineMinusSm,
} from "react-icons/hi";
import { fetchCoinPrice } from "../api";
import styled from "styled-components";

interface PriceProps {
  coinId: string;
}
interface IPriceData {
  id: number;
  name: number;
  symbol: number;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}
export default function Price() {
  const { coinId } = useOutletContext<PriceProps>();
  const { data: priceData, isLoading } = useQuery<IPriceData>(
    ["price", coinId],
    () => fetchCoinPrice(coinId)
  );
  console.log(priceData?.quotes);
  return (
    <div>
      {isLoading ? (
        "Loading Price..."
      ) : (
        <div>
          <Wrappers>
            <Wrapper>
              <Content>
                1시간전 대비
                {priceData && priceData?.quotes.USD.percent_change_1h > 0
                  ? ` ${priceData?.quotes.USD.percent_change_1h} 상승`
                  : priceData?.quotes.USD.percent_change_1h === 0
                  ? " 변동 없음"
                  : ` ${priceData?.quotes.USD.percent_change_1h} 하락`}
              </Content>
              <Icorn>
                {priceData && priceData?.quotes.USD.percent_change_1h > 0 ? (
                  <HiOutlineTrendingUp color="red" size={35} />
                ) : priceData &&
                  priceData?.quotes.USD.percent_change_1h === 0 ? (
                  <HiOutlineMinusSm color="gray" size={35} />
                ) : (
                  <HiOutlineTrendingDown color="blue" size={35} />
                )}
              </Icorn>
            </Wrapper>
            <Wrapper>
              <Content>
                12시간전 대비
                {priceData && priceData?.quotes.USD.percent_change_12h > 0
                  ? ` ${priceData?.quotes.USD.percent_change_12h} 상승`
                  : priceData?.quotes.USD.percent_change_12h === 0
                  ? " 변동 없음"
                  : ` ${priceData?.quotes.USD.percent_change_12h} 하락`}
              </Content>
              <Icorn>
                {priceData && priceData?.quotes.USD.percent_change_12h > 0 ? (
                  <HiOutlineTrendingUp color="red" size={35} />
                ) : priceData &&
                  priceData?.quotes.USD.percent_change_12h === 0 ? (
                  <HiOutlineMinusSm color="gray" size={35} />
                ) : (
                  <HiOutlineTrendingDown color="blue" size={35} />
                )}
              </Icorn>
            </Wrapper>
            <Wrapper>
              <Content>
                24시간전 대비
                {priceData && priceData?.quotes.USD.percent_change_24h > 0
                  ? ` ${priceData?.quotes.USD.percent_change_24h} 상승`
                  : priceData?.quotes.USD.percent_change_24h === 0
                  ? " 변동 없음"
                  : ` ${priceData?.quotes.USD.percent_change_24h} 하락`}
              </Content>
              <Icorn>
                {priceData && priceData?.quotes.USD.percent_change_24h > 0 ? (
                  <HiOutlineTrendingUp color="red" size={35} />
                ) : priceData &&
                  priceData?.quotes.USD.percent_change_24h === 0 ? (
                  <HiOutlineMinusSm color="gray" size={35} />
                ) : (
                  <HiOutlineTrendingDown color="blue" size={35} />
                )}
              </Icorn>
            </Wrapper>
            <Wrapper>
              <Content>
                1달전 대비
                {priceData && priceData?.quotes.USD.percent_change_30d > 0
                  ? ` ${priceData?.quotes.USD.percent_change_30d} 상승`
                  : priceData?.quotes.USD.percent_change_30d === 0
                  ? " 변동 없음"
                  : ` ${priceData?.quotes.USD.percent_change_30d} 하락`}
              </Content>
              <Icorn>
                {priceData && priceData?.quotes.USD.percent_change_30d > 0 ? (
                  <HiOutlineTrendingUp color="red" size={35} />
                ) : priceData &&
                  priceData?.quotes.USD.percent_change_30d === 0 ? (
                  <HiOutlineMinusSm color="gray" size={35} />
                ) : (
                  <HiOutlineTrendingDown color="blue" size={35} />
                )}
              </Icorn>
            </Wrapper>
          </Wrappers>
        </div>
      )}
    </div>
  );
}

const Wrappers = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.bgOverviewColor};
  color: ${props => props.theme.textColor};
  border-radius: 10px;
  padding: 0;
`;
const Content = styled.p`
  padding-top: 20px;
`;
const Icorn = styled.div`
  padding: 10px;
`;
