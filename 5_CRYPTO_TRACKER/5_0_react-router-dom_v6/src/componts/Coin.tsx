import { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
interface RouterState {
  state: {
    name: string;
  };
}
export default function Coin() {
  const [loading, setLoading] = useState(true);
  const { coinId } = useParams();
  const { state } = useLocation() as RouterState;
  const [info, setInfo] = useState({});
  const [priceInfo, setPriceInfo] = useState({});

  useEffect(() => {
    //즉시실행 함수. 추후에 react - qeury 로 변경 예정
    (async () => {
      //1. 코인에 대한 정보 2. 코인의 가격 정보
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPriceInfo(priceData);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <Title>{state?.name || "Loading..."}</Title>
      </Header>
      {loading ? <Loader>Loading...</Loader> : null}
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
const Loader = styled.span`
  text-align: center;
  display: block;
`;
