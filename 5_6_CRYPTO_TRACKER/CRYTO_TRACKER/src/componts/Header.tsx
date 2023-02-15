import styled from "styled-components";
import { TiWeatherSunny, TiWeatherNight } from "react-icons/ti";
import { useRecoilState, useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

export default function Header() {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const toggleDarkmode = () => {
    setIsDark(!isDark);
  };
  return (
    <Container>
      <NavWrapper>
        <ThemeButton onClick={toggleDarkmode}>
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
