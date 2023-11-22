import styled from "styled-components";

export const TermsAndCondsStyled = styled.div`
  display: flex;
  align-items: center;

  p {
    font-size: 10px;
    text-align: left;
    margin-left: 10px;
    padding-right: 10px;
    margin-top: 0;
    @media screen and (min-width: 768px) {
      font-size: 10px;
      width: 350px;
      margin-top: 30px;
      margin-bottom: 30px;
    }
  }
  .gdprCheck {
    width: 35px;
    margin: 0;
    padding: 0;
    margin-left: 10px;

    @media screen and (min-width: 768px) {
      width: 20px;
    }
  }
`;
