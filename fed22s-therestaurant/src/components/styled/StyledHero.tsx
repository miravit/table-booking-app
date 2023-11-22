import styled from "styled-components";

export const StyledHero = styled.div`
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  place-items: center;
  justify-content: center;
  text-align: center;
  display: flex;
  flex-direction: column;

  .container {
    justify-content: center;
    align-items: center;
    position: fixed;
    margin-top: 50px;
  }

  button {
    background-color: #b42e27;
    color: white;
  }
`;
