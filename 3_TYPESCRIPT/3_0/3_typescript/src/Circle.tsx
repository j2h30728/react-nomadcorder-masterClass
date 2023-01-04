import styled from "styled-components";
interface CirleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 100px;
  border: 5px solid ${props => props.borderColor};
`;

const Circle = ({
  bgColor,
  borderColor,
  text = "default text",
}: CirleProps) => {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};

export default Circle;
