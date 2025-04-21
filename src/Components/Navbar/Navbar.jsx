import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <ul className="nav-links">
          <li>
            <a href="#aboutme">About me</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#toolbox">Toolbox</a>
          </li>
          <li>
            <a href="#updates">Updates</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
