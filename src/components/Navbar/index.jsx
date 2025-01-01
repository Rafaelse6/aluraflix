import logo from "../../imgs/logo.svg";
import "./styles.css";
const Navbar = () => {
  return (
    <nav className="main-nav">
      <img className="logo-aluraflix" src={logo} alt="Logo Aluraflix" />
      <ul>
        <li>
          <button>Home</button>
        </li>
        <li>
          <button>Novo Vídeo</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
