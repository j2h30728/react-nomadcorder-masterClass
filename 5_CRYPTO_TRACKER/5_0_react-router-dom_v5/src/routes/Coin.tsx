import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

interface IRouterParams {
  coinId: string;
}
interface RouteState {
  name: string;
}
function Coin() {
  const [loading, setLoaing] = useState(true);
  const { coinId } = useParams<IRouterParams>();
  const { state } = useLocation<RouteState>();
  return (
    <Container>
      <Header>
        <Title>코인 {state?.name || "Loaing.."}</Title>
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

export default Coin;
