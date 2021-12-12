import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 100px;
  box-shadow: 5px 10px 15px ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 200px;
`;

const boxMotion = {
  entry: (isForward: boolean) => {
    return { x: isForward ? 500 : -500, opacity: 0, scale: 0 };
  },
  center: { x: 0, opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: (isForward: boolean) => {
    return {
      x: isForward ? -500 : 500,
      opacity: 0,
      scale: 0,
      transition: { duration: 0.3 },
    };
  },
};

function AnimePresnc() {
  const [visibleIdx, setVisibleIdx] = useState(1);
  const [isForward, setIsForward] = useState(true);

  const onForward = () => {
    setIsForward(true);
    setVisibleIdx((curr) => (curr === testData.length ? 1 : curr + 1));
  };

  const onBackward = () => {
    setIsForward(false);
    setVisibleIdx((curr) => (curr === 1 ? testData.length : curr - 1));
  };
  const testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Wrapper>
      <AnimatePresence exitBeforeEnter custom={isForward}>
        <Box
          custom={isForward}
          variants={boxMotion}
          initial="entry"
          animate="center"
          exit="exit"
          key={visibleIdx}
        >
          {visibleIdx}
        </Box>
      </AnimatePresence>
      <button onClick={onBackward}>Prev</button>
      <button onClick={onForward}>Next</button>
    </Wrapper>
  );
}

export default AnimePresnc;
