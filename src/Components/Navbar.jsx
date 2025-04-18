import "./Navbar.css";

export const Navbar = () => {
  return (

    <nav className="navbar">
      <div>
        <ul className="nav-links">
          <li>
            <a href="/products">About me</a>
          </li>
          <li>
            <a href="/about">Skills</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>
          <li>
            <a href="/toolbox">Toolbox</a>
          </li>
          <li>
            <a href="/journey">My Journey</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
);
};