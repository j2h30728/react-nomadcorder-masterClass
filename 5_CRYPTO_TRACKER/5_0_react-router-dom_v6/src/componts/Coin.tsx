import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
interface RouterState {
  state: {
    name: string;
  };
}
export default function Coin() {
  const [loading, setLoading] = useState(true);
  const { state } = useLocation() as RouterState;
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
