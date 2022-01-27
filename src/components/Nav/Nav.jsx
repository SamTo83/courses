import "./Nav.scss";
import { Link } from "react-router-dom";
import EDU from "../../assets/images/EDU.svg";

const Nav = () => {
  return (
    <div className="nav">
      <div>
        <img src={EDU} alt="" />
      </div>
      <div className="nav__container">
        <Link className="nav-menu__item" to="/">
          Home
        </Link>

        <Link className="nav-menu__item" to="/courses">
          Courses
        </Link>

        <Link className="nav-menu__item" to="/course">
          Add Course
        </Link>
      </div>
    </div>
  );
};

export default Nav;
