import "./App.css";
import { Navbar } from "../containers/";
import { Separater } from "../components";
import Slide1 from "../containers/slide1";

function App() {
  // const { initWow } = UseWow();

  // useEffect(() => {
  //   initWow();
  // }, []);
  return (
    <div className="App">
      <Navbar />
      <Separater />
      <Slide1 />
    </div>
  );
}

export default App;
