import styled from "styled-components";

export default function Coins() {
  return <Title>Coins</Title>;
}

const Title = styled.h1`
  color: ${props => props.theme.accentColor};
`;
