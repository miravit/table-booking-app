import { Link } from "react-router-dom";
import { ContainerLogo, HeroStyled, Logo } from "../styled/HeroStyled";

export const Home = () => {
  return (
    <>
      <HeroStyled className="hero">
        <ContainerLogo>
          <Logo>Dirty Tapas</Logo>
          <button>
            <Link to="/booking">Book a Table</Link>
          </button>
        </ContainerLogo>
      </HeroStyled>
    </>
  );
};
