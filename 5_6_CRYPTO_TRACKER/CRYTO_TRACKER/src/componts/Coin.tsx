import {
  useLocation,
  useParams,
  Outlet,
  Link,
  useMatch,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoinInfo, fetchCoinTrikers } from "../api";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { TiArrowLeftOutline } from "react-icons/ti";

interface RouterState {
  state: {
    name: string;
  };
}
interface InfoData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: string;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  first_data_at: string;
  last_data_at: string;
}
interface TickersData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
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
export default function Coin() {
  const { coinId } = useParams();
  const { state } = useLocation() as RouterState;
  const priceMatch = useMatch(`${process.env.PUBLIC_URL}/:coinId/price`);
  const chartMatch = useMatch(`${process.env.PUBLIC_URL}/:coinId/chart`);
  const navigate = useNavigate();
  const handleBack = () => navigate(`${process.env.PUBLIC_URL}/`);
  const { isLoading: infoLoading, data: infoData } = useQuery<InfoData>(
    ["info", coinId],
    () => fetchCoinInfo(coinId),
    //fetchCoinInfo함수를 불러와서 URL로부터 오는 coinId를 넣어주는 것
    {
      refetchInterval: 5000, //5000ms(5초) : 해당하는 이 query를 5초마다 refresh함
    }
  );
  const { isLoading: trikersoading, data: tickersData } = useQuery<TickersData>(
    ["trikers", coinId],
    () => fetchCoinTrikers(coinId)
  );

  // 통합된 loading 만듬. 둘중에 하나라도 성공하면 완료. 둘다 성공하지 못하면 계속 loading 컴포넌트 렌더
  const loading = infoLoading || trikersoading;
  return (
    <Container>
      <HelmetProvider>
        <Helmet>
          <title>
            {state?.name
              ? state?.name
              : loading
              ? "Loading..."
              : infoData?.name}
          </title>
        </Helmet>
      </HelmetProvider>
      <Header>
        <BackButton onClick={handleBack}>
          <TiArrowLeftOutline size={30} />
        </BackButton>
        <Title>
          {state?.name ? state?.name : loading ? "Loading..." : infoData?.name}
        </Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>{infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>price</span>
              <span>${tickersData?.quotes?.USD.price.toFixed(3)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply:</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply:</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <Tabs>
            <Tab isActive={chartMatch !== null}>
              <Link to="chart">Chart</Link>
            </Tab>
            <Tab isActive={priceMatch !== null}>
              <Link to="price">Price</Link>
            </Tab>
          </Tabs>
        </>
      )}
      <Outlet context={{ coinId: coinId }} />
    </Container>
  );
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.div`
  height: 15vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;
const BackButton = styled.div`
  position: absolute;
  left: 10px;
  top: 40px;
  background-color: ${props => props.theme.bgColor};
`;
const Title = styled.h1`
  font-size: 40px;
  color: ${props => props.theme.accentColor};
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.bgOverviewColor};
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.div`
  margin: 20px 0px;
`;
const Tabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;
const Tab = styled.span<{ isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 400px;
  background-color: ${props =>
    props.isActive ? "none" : props.theme.bgOverviewColor};
  padding: 7px 0px;
  border-radius: 10px;
  color: ${props =>
    props.isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block; //버튼 어느 곳을 눌러도 클릭됨
  }
  border: ${props =>
    props.isActive ? `3px solid ` + props.theme.bgOverviewColor : "none"};
`;
