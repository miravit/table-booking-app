import styled from "styled-components";

export const CalendarContainer = styled.div`
  max-width: 600px;
  margin: auto;
  margin-top: 20px;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 3px;

  .react-calendar__tile--now {
    background: #ffffff;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    border: 1px solid #b42e27;
    background-color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #b42e27;
  }
  .react-calendar__tile--active {
    background: #b42e27;
    color: white;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #000000;
  }
  .react-calendar__month-view__days__day--weekend:hover,
  .react-calendar__month-view__days__day--weekend:focus
    .react-calendar__month-view__days__day--weekend:active {
    color: #ffffff;
  }
  .react-calendar__month-view__weekdays__weekday {
    color: #000000;
  }
`;

export const CalendarContainerAdmin = styled.div`
  max-width: 600px;
  margin: auto;
  margin-top: 20px;
  background-color: #ffffff;
  padding: 10px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;

  .react-calendar__tile--now {
    background: #ffffff;
  }
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    border: 1px solid #b42e27;
    background-color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #b42e27;
  }
  .react-calendar__tile--active {
    background: #b42e27;
    color: white;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #000000;
  }
  .react-calendar__month-view__days__day--weekend:hover,
  .react-calendar__month-view__days__day--weekend:focus
    .react-calendar__month-view__days__day--weekend:active {
    color: #ffffff;
  }
  .react-calendar__month-view__weekdays__weekday {
    color: #000000;
  }
`;
