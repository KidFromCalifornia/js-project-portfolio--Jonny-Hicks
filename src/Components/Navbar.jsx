import "./Navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div>
        <ul className="nav-links">
          <li>
            <a href="#Aboutme">About me</a>
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
            <a href="#Updates">Updates</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
