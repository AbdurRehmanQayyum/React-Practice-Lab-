import logo from "../assets/images/react-img.png";


function Header() {
    return (
    <header className="header">
      <img className="image" src={logo}  alt="Logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
    );
}


export default Header;