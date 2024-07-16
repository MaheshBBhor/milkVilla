import "./App.css";
import { Header } from "./component/Header.js";
 import { Body } from "./component/Body.js";
import { Footer } from "./component/Footer.js";


function App() {
  return (
    <>
      {Header()}
      {Body()}
      <Footer/>
    </>
  );
}

export default App;
