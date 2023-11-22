import { useContext, useEffect } from "react";
import Calendar from "react-calendar";
import {
  BookingsContext,
  CurrentBookingContext,
} from "../contexts/BookingContext";
import { Value } from "react-calendar/dist/cjs/shared/types";
import "react-calendar/dist/Calendar.css";
import { CalendarContainer } from "./styled/CalendarContainer";

export const CalendarReact = () => {
  const { updateDate, booking } = useContext(CurrentBookingContext);
  const {
    getBookings,
    fullyBooked,
    oneTableLeft,
    disableSittingOption,
    bookings,
  } = useContext(BookingsContext);

  useEffect(() => {
    getBookings();
  }, []);

  const handleDateChange = (newValue: Value) => {
    const formattedDate = newValue?.toLocaleString("en-US").split(",")[0];

    const matchedBooking = bookings.filter((b) => formattedDate === b.date);

    console.log(matchedBooking);

    let peopleThatDay = 0;
    let tablesThatDay = 0;
    let time = "";

    if (matchedBooking.length === 0) {
      oneTableLeft("showNumbers");
      disableSittingOption("", "showSeating");
    } else {
      matchedBooking.map((chosenBooking) => {
        chosenBooking.sitting === "17-19" ? (time = "17-19") : (time = "19-21");
        tablesThatDay += chosenBooking.tables;
        peopleThatDay += chosenBooking.people;

        if (chosenBooking.sitting) {
          if (tablesThatDay === 30) {
            console.log("helt fullbokat");
            fullyBooked();
          }
        }

        if (chosenBooking.sitting === time) {
          if (peopleThatDay === 90) {
            console.log("fullt med människor");
          }

          console.log(peopleThatDay, tablesThatDay);

          if (tablesThatDay === 14) {
            console.log("endast 6 platser kvar");
            oneTableLeft("disableNumbers");
          } else {
            oneTableLeft("showNumbers");
          }

          if (tablesThatDay === 15) {
            disableSittingOption(time, "disableShowSeating");
          }
          if (tablesThatDay < 14) {
            disableSittingOption(time, "showSeating");
          }
        }
      });
    }

    updateDate(formattedDate);
  };

  return (
    <CalendarContainer>
      <Calendar onChange={handleDateChange} value={booking.date} />
    </CalendarContainer>
  );
};
