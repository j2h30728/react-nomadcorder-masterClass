import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;
const Box = styled.div`
  background-color: ${prop => prop.bgColor};
  width: 300px;
  height: 300px;
  text-decoration: none;
`;

const Text = styled.span`
  color: white;
`;
const Circle = styled(Box)`
  border-radius: 100%;
`;
const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

function App() {
  return (
    <Father as="header">
      <Box bgColor="teal">
        <Text>Hello</Text>
      </Box>
      <Box as="a" href="/" bgColor="tomato">
        <Text>
          as를 사용하면 HTML태그를 변경할 수 있음. 이 텍스트를 감싼 Box는
          a태그로 변경됨
          <br /> - 어떤것을 추가할 계획이 없거나 <br /> - 컴포넌트를 확장하고
          싶지 않을때 사용
        </Text>
      </Box>
      <Circle bgColor="gray" />
      <div style={{ display: "flex", flexDirection: "column" }}>
        {/* 아래의 Input 은 위의 styled.input.attrs({ required: true }) 로 인하여 required 속성을 포함하고 있음 */}
        <Input />
        <Input />
        <Input />
      </div>
    </Father>
  );
}

export default App;
