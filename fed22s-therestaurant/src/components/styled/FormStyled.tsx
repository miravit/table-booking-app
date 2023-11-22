import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    width: 0px;
    margin-left: 450px;
    margin-top: 130px;
  }

  input {
    width: 350px;
    height: 30px;
  }

  button {
    margin-top: -17px;
    margin-bottom: 10px;
    border: 1px solid black;

    @media screen and (min-width: 768px) {
      width: 200px;
    }
  }
`;

export const FormAdminStyled = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 13px;
  margin-top: 30px;

  input {
    width: 320px;
    height: 30px;
  }
`;
