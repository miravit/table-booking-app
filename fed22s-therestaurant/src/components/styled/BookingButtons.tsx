import styled from "styled-components";

export const BookingButton = styled.button`
  margin: 10px;
  padding: 10px;
  border: solid black 2px;
  border-radius: 10px;
  background-color: white;
  &:hover {
    background-color: #b42e27;
    color: white;
  }
`;

export const BookingConfirmButton = styled(BookingButton)``;

export const BookingGoBackButton = styled(BookingButton)``;
