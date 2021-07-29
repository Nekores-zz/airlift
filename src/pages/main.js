import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slide2 from "../containers/slide2";
import Slide3 from "../containers/slide3";
import App from "./App";

function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/airlift" component={App} />
        <Route path="/get-started" component={Slide2} />
        <Route path="/welcome" component={Slide3} />
      </Switch>
    </Router>
  );
}

export default Main;
