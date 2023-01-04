import styled from "styled-components";

function App() {
  const Container = styled.div`
    background-color: ${props => props.theme.bgColor};
  `;
  const H1 = styled.h1`
    color: ${props => props.theme.textColor};
  `;
  interface DummyProps {
    text: string;
    otherThingHere?: boolean;
  }
  function Dummy({ text, otherThingHere }: DummyProps) {
    return <H1>{text}</H1>;
  }
  const onClickForm = (event: React.FormEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.value);
  };
  const onClickMouse = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget.value);
  };
  return (
    <Container>
      <Dummy text="Hello" />
      <form>
        <button onClick={onClickForm}>Click me</button>
      </form>
      <button onClick={onClickMouse}>Click me</button>
    </Container>
  );
}
export default App;
