import styled from "styled-components";
import { TiWeatherSunny, TiWeatherNight } from "react-icons/ti";
interface IHeaderProps {
  isDark: boolean;
  toggleDark: () => void;
}
export default function Header({ toggleDark, isDark }: IHeaderProps) {
  return (
    <Container>
      <NavWrapper>
        <ThemeButton onClick={toggleDark}>
          {isDark ? <TiWeatherNight size={35} /> : <TiWeatherSunny size={35} />}
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
