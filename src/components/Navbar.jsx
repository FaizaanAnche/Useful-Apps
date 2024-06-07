import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <h1>USEFUL APPS</h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/todo" activeClassname="active">
              To Do App
            </NavLink>
          </li>
          <li>
            <NavLink to="/digital-clock" activeClassname="active">
              Digital Clock
            </NavLink>
          </li>
          <li>
            <NavLink to="/stopwatch" activeClassname="active">
              Stopwatch
            </NavLink>
          </li>
          <li>
            <NavLink to="/color-picker" activeClassname="active">
              Color Picker
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
