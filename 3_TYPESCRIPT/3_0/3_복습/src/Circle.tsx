import styled from "styled-components";

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}
interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  background-color: ${props => props.bgColor};
  border-radius: 100px;
  width: 200px;
  height: 200px;
  border: 3px solid ${props => props.borderColor};
`;

const Circle = ({
  bgColor,
  borderColor,
  text = "text default",
}: CircleProps) => {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
};

export default Circle;
