import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";

const linkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  return (
    <header>
      <nav className={css.nav}>
        <NavLink to="/" className={linkClass}>
          Home
        </NavLink>
        <NavLink to="/register" className={linkClass}>
          Register
        </NavLink>
        <NavLink to="/login" className={linkClass}>
          Login
        </NavLink>
      </nav>
    </header>
  );
}
