import { Link } from "react-router-dom";
import { NavbarStyled } from "./styled/NavbarStyled";

export const Navbar = () => {
  return (
    <>
      <NavbarStyled>
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/booking">
          <p>Book</p>
        </Link>
        <Link to="/contact">
          <p>Contact</p>
        </Link>
      </NavbarStyled>
    </>
  );
};
