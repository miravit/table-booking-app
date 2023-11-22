import styled from "styled-components";

interface SeatingProps {
  changeVisability: string;
}

export const SittingButton = styled.button`
  margin-bottom: 20px;
  margin-top: 20px;
  border: 1px solid black;
  margin-right: 20px;
  margin-left: 10px;
  visibility: ${(props: SeatingProps) =>
    props.changeVisability === "showSeating" ? "visible" : "hidden"};

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
