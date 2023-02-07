import React, { useState } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { ligthTheme, darkTheme } from "./theme";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const handleChangeTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={darkMode ? darkTheme : ligthTheme}>
      <Container>
        <Title>theme</Title>
        <Button onClick={handleChangeTheme}>Theme Change</Button>
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  background-color: ${props => props.theme.bgColor};
`;
const Title = styled.h1`
  color: ${props => props.theme.textColor};
  -webkit-text-stroke: 1px ${props => props.theme.borderColor};
`;
const Button = styled.button`
  background-color: ${props => props.theme.btColor};
  color: ${props => props.theme.textColor};
`;

export default App;
