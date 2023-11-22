import { useContext, useState } from "react";
import { BookingAdminContext } from "../contexts/BookingContext";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { ActionType } from "../reducers/BookingsReducer";
import { deleteBooking } from "../services/restaurantApi";
import { ShowCreateNewBooking } from "./ShowCreateNewBooking";
import Calendar from "react-calendar";
import { Value } from "react-calendar/dist/cjs/shared/types";
import {
  BookingContainerMain,
  BookingsContainer,
  TextBooking,
} from "../components/styled/AdminBookingsContainer";
import { CalendarContainerAdmin } from "./styled/CalendarContainer";
import {
  AllBookingsAdminButton,
  CancelCreateBookingAdminButton,
  CreateBookingsAdminButton,
  DeleteBookingAdminButton,
} from "./styled/ButtonAdmin";

export const ShowAllBookingsAdmin = () => {
  const { bookings, filteredBookings } = useContext(BookingAdminContext);
  const dispatch = useContext(BookingDispatchContext);

  console.log(bookings);

  const [showForm, setShowForm] = useState(false);
  const [value, onChange] = useState("");

  const deleteCurrentBooking = (id: string) => {
    dispatch({ type: ActionType.DELETEBOOKING, payload: id });
  };

  console.log(bookings);

  const showCreateForm = () => {
    setShowForm(true);
  };

  const sortDataDate = () => {
    console.log("klickade på sortDataDate");
    const sortData = [...bookings].sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateA.getTime() - dateB.getTime();
    });

    console.log(sortData);

    dispatch({
      type: ActionType.GOTALLBOOKINGS,
      payload: JSON.stringify(sortData),
    });
  };

  const data = filteredBookings.map((b) => {
    return (
      <BookingsContainer key={b._id}>
        <TextBooking>date: {b.date}</TextBooking>
        <TextBooking>guests: {b.people}</TextBooking>
        <TextBooking>Sitting: {b.sitting}</TextBooking>
        <TextBooking>Firstname: {b.guest.name}</TextBooking>
        <TextBooking>Lastname: {b.guest.lastname}</TextBooking>
        <TextBooking>Phone: {b.guest.phone}</TextBooking>
        <TextBooking>email: {b.guest.email}</TextBooking>

        <DeleteBookingAdminButton
          onClick={() => {
            deleteCurrentBooking(b._id.toString()),
              deleteBooking(b._id.toString());
          }}
        >
          delete booking
        </DeleteBookingAdminButton>
      </BookingsContainer>
    );
  });

  console.log(data);

  const handleSortChange = (newValue: Value) => {
    const formattedDate = newValue?.toLocaleString("en-US").split(",")[0];
    dispatch({ type: ActionType.FILTERED, payload: formattedDate });
    if (formattedDate) onChange(formattedDate);
  };

  const cancelNewBooking = () => {
    setShowForm(false);
  };

  return (
    <>
      <AllBookingsAdminButton onClick={sortDataDate}>
        All Bookings
      </AllBookingsAdminButton>
      <CreateBookingsAdminButton onClick={showCreateForm}>
        create new booking
      </CreateBookingsAdminButton>
      {showForm && <ShowCreateNewBooking></ShowCreateNewBooking>}
      {showForm && (
        <CancelCreateBookingAdminButton onClick={cancelNewBooking}>
          Cancel
        </CancelCreateBookingAdminButton>
      )}
      <CalendarContainerAdmin>
        <Calendar onChange={handleSortChange} value={value} />
      </CalendarContainerAdmin>
      <BookingContainerMain>{data}</BookingContainerMain>
    </>
  );
};
