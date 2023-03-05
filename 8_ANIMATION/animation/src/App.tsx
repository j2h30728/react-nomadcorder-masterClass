import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 15px;
`;

const Box = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 280px;
  height: 180px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Overlay = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center; ;
`;
const Circle = styled(motion.div)`
  width: 60px;
  height: 60px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;
const Button = styled(motion.div)`
  background-color: rgb(255, 255, 255);
  margin-top: 50px;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  color: rgb(84, 109, 229);
`;
const boxBariants = {
  hover: (x: string) => ({
    originX: ["1", "3"].includes(x) ? 1 : 0,
    originY: ["1", "2"].includes(x) ? 1 : 0,
    scale: 1.2,
  }),
};
const overlay = {
  hidden: { backgroundColor: "rgba(0, 0, 0, 0)" },
  visible: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  exit: { backgroundColor: "rgba(0, 0, 0, 0)" },
};
function App() {
  const [clickId, setClickId] = useState<null | string>(null);
  const [clickBtn, setClickBtn] = useState(false);
  return (
    <Wrapper>
      <Grid>
        {["1", "2", "3", "4"].map(x => (
          <Box
            custom={x}
            variants={boxBariants}
            whileHover="hover"
            onClick={() => setClickId(x)}
            key={x}
            layoutId={x}>
            {(x === "2" && !clickBtn) || (x === "3" && clickBtn) ? (
              <Circle layoutId="btn" />
            ) : null}
          </Box>
        ))}
      </Grid>
      <Button
        onClick={() => setClickBtn(prev => !prev)}
        transition={{ duration: 0.2 }}
        whileTap={{ scale: 1.4, color: "rgb(241, 144, 102)" }}>
        Switch
      </Button>
      <AnimatePresence>
        {clickId ? (
          <Overlay
            onClick={() => setClickId(null)}
            variants={overlay}
            initial="hidden"
            animate="visible"
            exit="exit">
            <Box
              style={{ backgroundColor: "rgb(255,255,255)" }}
              layoutId={clickId}
            />
          </Overlay>
        ) : null}
      </AnimatePresence>
    </Wrapper>
  );
}

export default App;
