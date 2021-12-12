import { motion } from "framer-motion";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;
`;

const Box = styled(motion.div)`
  width: 200px;
  height: 200px;
  box-shadow: 5px 10px 15px ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 200px;
`;

const Circle = styled(motion.div)`
  background-color: rgba(255, 159, 67, 1);
  width: 50px;
  height: 50px;
  border-radius: 25px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1) 0 10px 20px rgba(0, 0, 0, 0.1);
`;

function AnimeCircleInOne() {
  const [clicked, setClicked] = useState(false);
  const toggleClicked = () => {
    setClicked((curr) => !curr);
  };

  return (
    <Wrapper onClick={toggleClicked}>
      <Box>{clicked ? <Circle layoutId="circles" /> : null}</Box>
      <Box>
        {!clicked ? (
          <Circle
            layoutId="circles"
            style={{ borderRadius: "0", scale: "2" }}
          />
        ) : null}
      </Box>
    </Wrapper>
  );
}

export default AnimeCircleInOne;
