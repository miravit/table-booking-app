import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  place-content: center;
`;

export const WrapperColumn = styled.div`
  display: flex;
  flex-direction: row;
  width: 250px;
  height: 250px;
  margin-top: 50px;
  text-align: left;
`;

export const WrapperColumnCentered = styled.div`
  display: inline-block;
  place-content: center;
  width: 250px;
  height: 250px;
  margin-top: 0px;
`;
