import styled from "styled-components";
interface CirleProps {
  bgColor: string;
}
interface ContainerProps {
  bgColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
`;

const Circle = ({ bgColor }: CirleProps) => {
  return <Container bgColor={bgColor} />;
};

export default Circle;
