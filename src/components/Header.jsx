import logo from "../assets/images/react-img.png";


function Header() {
    return (
    <header>
      <img src={logo} width="90px" alt="Logo" />
      <nav>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
    );
}


export default Header;