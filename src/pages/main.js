import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slide1 from "../containers/slide1";
import Slide2 from "../containers/slide2";
import App from "./App";

function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/airlift" component={App} />
        <Route path="/get-started" component={Slide2} />
        {/* <Route path="/service" component={Service} /> */}
      </Switch>
    </Router>
  );
}

export default Main;
