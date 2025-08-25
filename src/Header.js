import "./HeaderStyle.css";

function Header() {
  return (
    <header className="nav">
      <a href="#hero" className="brand">
        Meu Portfólio
      </a>
      <nav className="links">
        <a href="#projects">Projetos</a>
        <a href="#about">Sobre</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
