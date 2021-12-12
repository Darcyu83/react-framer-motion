import { Link, Route, Switch } from "react-router-dom";
import styled, { createGlobalStyle } from "styled-components";
import AnimePresnc from "../components/AnimePresnc";

import AnimeCircleInOne from "../components/AnimeCircleInOne";
import BoxPopped from "../components/BoxPopped";
import { GlocbalStyle } from "../theme";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Conent = styled.div`
  padding: 20px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Nav = styled.nav`
  width: 80%;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
  a {
    text-decoration: none;
  }
`;

function Home() {
  return (
    <Wrapper>
      <GlocbalStyle />
      <Nav>
        <Link to="/1"> Home </Link> &nbsp; | &nbsp;
        <Link to="/ani">AnimatePresence</Link>&nbsp; | &nbsp;
        <Link to="/circleinabox">Cirlce inside a box</Link>&nbsp; | &nbsp;
        <Link to="/boxpopped">Box Popped</Link>
      </Nav>
      <Switch>
        <Route path="/1">
          <Conent>여기는 홈 페이지 메인 페이지 </Conent>
        </Route>
        <Route path="/ani">
          <AnimePresnc />
        </Route>
        <Route path="/circleinabox">
          <AnimeCircleInOne />
        </Route>
        <Route path="/boxpopped">
          <BoxPopped />
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default Home;
