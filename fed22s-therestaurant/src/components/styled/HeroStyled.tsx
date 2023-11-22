import styled from "styled-components";
import img from "../../assets/heroimage.jpg";

export const HeroStyled = styled.div`
  background-image: src(${img});
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-image: url(${img});
  display: flex;

  button {
    height: 50px;
    width: 200px;
    font-weight: 700;
    background-color: #b42e27;
  }
  a {
    color: white;
  }
`;

export const ContainerLogo = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Logo = styled.h1`
  color: white;
  margin-bottom: 150px;
`;
