import styled from "styled-components";

export const BookingsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 90px;
  padding: 30px;
  border: solid black 1px;
  width: 60vw;

  @media screen and (min-width: 768px) {
    padding: 10px;
    width: 40vw;
  }
`;

export const BookingContainerMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextBooking = styled.p`
  font-weight: bold;
`;
