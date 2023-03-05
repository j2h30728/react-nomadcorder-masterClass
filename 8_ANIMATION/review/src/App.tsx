import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const Box = styled(motion.div)`
  cursor: pointer;
  width: 250px;
  height: 150px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Overlay = styled(motion.div)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center; ;
`;
const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};
function App() {
  const [clickId, setClickId] = useState<null | string>(null);
  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map(x => (
          <Box onClick={() => setClickId(x)} key={x} layoutId={x} />
        ))}
      </Grid>
      <AnimatePresence>
        {clickId ? (
          <Overlay
            onClick={() => setClickId(null)}
            variants={overlay}
            initial="hidden"
            animate="visible"
            exit="exit">
            <Box layoutId={clickId} />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
