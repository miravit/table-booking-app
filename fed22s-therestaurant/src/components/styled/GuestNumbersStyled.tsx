import styled from "styled-components";

interface GuestNumbersStyledProps {
  available: string;
}

export const GuestNumbersStyled = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  visibility: ${(props: GuestNumbersStyledProps) =>
    props.available === "showNumbers" ? "visible" : "hidden"};

  &:hover {
    border: #b42e27 2px solid;
  }

  &:last-child {
    padding-left: 15px;
  }

  &:focus {
    background-color: #b42e27;
    color: white;
  }
  &:checked {
    background-color: #b42e27;
  }
`;
