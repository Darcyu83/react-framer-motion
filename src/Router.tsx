import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./routes/Home";
import Info from "./routes/Info";

function Router() {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/1">
          <Home />
        </Route>
        <Route path="/ani">
          <Home />
        </Route>
        <Route path="/circleinabox">
          <Home />
        </Route>
        <Route path="/boxpopped">
          <Home />
        </Route>
      </Switch>
    </HashRouter>
  );
}

export default Router;
