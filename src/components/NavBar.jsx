// components/NavBar.js
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar">
      <nav role="navigation">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Home
        </NavLink>
        <NavLink
          to="/directors"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Directors
        </NavLink>
        <NavLink
          to="/actors"
          className={({ isActive }) => (isActive ? "active" : undefined)}
        >
          Actors
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar;
