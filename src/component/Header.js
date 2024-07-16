import logo from "./images/logo.png";


export function Header() {
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