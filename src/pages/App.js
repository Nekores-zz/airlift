import "./App.css";
import { Navbar } from "../containers/";
import { Separater } from "../components";
import Slide1 from "../containers/Slide1";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Separater />
      <Slide1 />
    </div>
  );
}

export default App;
