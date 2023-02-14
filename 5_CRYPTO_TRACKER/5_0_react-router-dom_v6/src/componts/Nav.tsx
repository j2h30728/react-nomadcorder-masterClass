import styled from "styled-components";
import { TiWeatherSunny, TiWeatherNight } from "react-icons/ti";

export default function Nav({ darkMode }: any) {
  const { themeMode, setThemeMode } = darkMode;
  const toggleTheme = () => {
    setThemeMode(themeMode === "dark" ? "light" : "dark");
  };

  return (
    <Container>
      <NavWrapper>
        <ThemeButton onClick={toggleTheme}>
          {themeMode === "dark" ? (
            <TiWeatherNight size={35} />
          ) : (
            <TiWeatherSunny size={35} />
          )}
        </ThemeButton>
      </NavWrapper>
    </Container>
  );
}
const Container = styled.div`
  max-width: 440px;
  margin: 0 auto;
  position: relative;
  z-index: 10;
`;
const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ThemeButton = styled.div`
  position: absolute;
  right: 10px;
  top: 40px;
`;
