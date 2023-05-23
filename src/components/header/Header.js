import "./header.css";

import Logo from "../../assets/images/logo.jpg";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div as="header">
      <div maxW={"container.xl"}>
        <div px={0} py={4} justifyContent="space-between" alignItems="center">
          <NavLink to="/">
            {<img className="logo-img" src={Logo} alt="Little Lemon logo" />}
          </NavLink>
          <nav className="nav">
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="#">About</NavLink>
              </li>
              <li>
                <NavLink to="#">Menu</NavLink>
              </li>
              <li>
                <NavLink to="/reservations">Reservations</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
