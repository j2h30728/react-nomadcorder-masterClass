import styled from "styled-components";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

export default function Coins() {
  //useQuery 라는 react-query hook사용
  const { isLoading, data: coins } = useQuery<ICoin[]>(
    ["allCoins"],
    fetchCoins
  );
  // const [coins, setCoins] = useState<ICoin[]>([]);
  // const [loading, setLoading] = useState(true);

  // 데이터가 준비되면, 데이터를 state에 집어넣고 로딩을 false로 함
  // react query를 사용해 위의 과정을 자동으로 해줌
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //     const json = await response.json();
  //     setCoins(json.slice(0, 100)); //100개만 잘라냄
  //     setLoading(false);
  //   })();
  // }, []);
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {coins?.slice(0, 100).map(coin => (
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}
`}
                />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
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
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${props => props.theme.accentColor};
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background-color: ${props => props.theme.darkBgColor};
  color: ${props => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;

  a {
    padding: 20px;
    transition: color 0.2s ease-in;
    display: flex;
    align-items: center;
  }
  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;
