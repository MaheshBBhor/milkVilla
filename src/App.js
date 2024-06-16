import "./App.css";
import logo from "./images/logo.png";

function Header() {
  return (
    <>
      <div className="header">
        <a href="/">
          <img src={logo} alt="logo of company" />
        </a>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
}
const Body = () => {
  return (
    <h1 id="title" key="h2">
      Milk Villa
    </h1>
  );
};

function App() {
  return (
    <>
      {Header()}
      {Body()}
    </>
  );
}

export default App;
