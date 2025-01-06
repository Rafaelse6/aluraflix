import { Link } from "react-router-dom";
import logo from "../../imgs/logo.svg";
import "./styles.css";

const Navbar = () => {
  return (
    <nav className="main-nav">
      <img className="logo-aluraflix" src={logo} alt="Logo Aluraflix" />
      <ul>
        <li>
          <Link className="nav-button" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="nav-button" to="/novo-video">
            Novo Vídeo
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
