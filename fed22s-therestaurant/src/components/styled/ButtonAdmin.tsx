import styled from "styled-components";

export const ButtonAdmin = styled.button`
  margin: 10px;
  padding: 10px;
  border: solid black 2px;
  border-radius: 10px;
  background-color: white;
  &:hover {
    background-color: #b42e27;
  }
`;

export const DeleteBookingAdminButton = styled(ButtonAdmin)`
  margin-top: 30px;
`;

export const AllBookingsAdminButton = styled(ButtonAdmin)`
  margin-top: 30px;
`;

export const CreateBookingsAdminButton = styled(ButtonAdmin)``;

export const CancelCreateBookingAdminButton = styled(ButtonAdmin)``;

export const BackToHomePageButton = styled(ButtonAdmin);
