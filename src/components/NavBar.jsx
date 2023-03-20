import CartWidget from "./CartWidget";
import logo from "../assets/logo.png"

const NavBar = () => {
  return (
    <>
      <header>
        <a href="/">
          <img src={logo} alt="" className="NavLogo"/>
        </a>
        <nav>
          <ul className="container-nav">
            <li>
              <a href="/">REMERAS</a>
            </li>
            <li>
              <a href="/">HOODIES</a>
            </li>
            <li>
              <a href="/">CONTACTO</a>
            </li>
          </ul>
        </nav>
      </header>
      <CartWidget />
     
    </>
  );
};

export default NavBar;
