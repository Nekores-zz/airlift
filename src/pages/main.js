import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slide2 from "../containers/slide2";
import Slide3 from "../containers/slide3";
import slide4 from "../containers/slide4";
import App from "./App";

function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/airlift" component={App} />
        <Route path="/get-started" component={Slide2} />
        <Route path="/welcome" component={Slide3} />
        <Route path="/demo" component={slide4} />
      </Switch>
    </Router>
  );
}

export default Main;
