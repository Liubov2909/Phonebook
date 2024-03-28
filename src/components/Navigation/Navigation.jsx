import { NavLink } from "react-router-dom";
import clsx from "clsx";
import css from "./Navigation.module.css";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const linkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.isActive);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavLink to="/" className={linkClass}>
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink to="/contacts" className={linkClass}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
}
