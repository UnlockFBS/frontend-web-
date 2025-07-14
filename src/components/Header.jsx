import { Link } from "react-router-dom";

function Header() {
  return (
    <header style={{ background: "#004080", color: "white", padding: "10px" }}>
      <nav>
        <Link to="/" style={{ margin: "10px", color: "white" }}>Accueil</Link>
        <Link to="/planning" style={{ margin: "10px", color: "white" }}>Planning</Link>
      </nav>
    </header>
  );
}

export default Header;
