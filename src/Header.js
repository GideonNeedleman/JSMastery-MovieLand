import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";
import bookmark from "./assets/bookmark-empty.svg";

function Header({ title }) {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <NavLink to={"/"}>Movie Search</NavLink>
        <NavLink to={"/favorites"}>
          <img src={bookmark} class="img-fluid rounded-top" alt="" />
        </NavLink>
      </div>
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
