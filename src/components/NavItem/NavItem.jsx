import { NavLink } from "react-router-dom";

export default function NavItem({ children, path }) {
  return (
    <li>
      <NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "text-[#ffab0b] cursor-pointer tracking-wide text-lg"
            : "cursor-pointer tracking-wide text-lg"
        }
      >
        {children}
      </NavLink>
    </li>
  );
}
