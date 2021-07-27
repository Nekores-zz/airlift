import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Slide1 from "../containers/slide1";
import App from "./App";

function Main() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        {/* <Route path="/about" component={About} /> */}
        {/* <Route path="/service" component={Service} /> */}
      </Switch>
    </Router>
  );
}

export default Main;
