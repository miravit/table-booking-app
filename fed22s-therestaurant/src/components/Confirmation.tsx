import { useState } from "react";
import { useContext } from "react";
import { CurrentBookingContext } from "../contexts/BookingContext";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { deleteBooking } from "../services/restaurantApi";
import { Link } from "react-router-dom";
import { DeleteBookingAdminButton } from "./styled/ButtonAdmin";
import { BookingButton } from "./styled/BookingButtons";

export const Confirmation = () => {
  const [showConfirmation, setShowConfirmation] = useState(true);
  const { booking } = useContext(CurrentBookingContext);
  const [showDeleted, setShowDeleted] = useState(false);

  const handleClick = async () => {
    await deleteBooking(booking._id);
    console.log("log");
    setShowConfirmation(false);
    setShowDeleted(true);
  };

  if (showDeleted === false) {
    return (
      <>
        {showConfirmation && (
          <div>
            <h2>Thank you, {booking.guest.name}</h2>
            <div>
              <div>
                <span>Guests: {""}</span>
                <span>{booking.people} guests</span>
              </div>
              <div>
                {" "}
                <span>
                  Date: {booking.date} {booking.sitting}
                </span>
              </div>

              <div>
                <span>Order: {""}</span>
                <span>#{booking._id}</span>
              </div>
            </div>
            <div>
              <h4>Guest details</h4>
              <div>
                <span>Name: </span>
                <span>
                  {booking.guest.name} {booking.guest.lastname}
                </span>
              </div>
              <div>
                <span>Email: </span>
                <span>{booking.guest.email}</span>
              </div>
              <div>
                <span>Phone: </span>
                <span>{booking.guest.phone}</span>
              </div>
            </div>
            <div>
              <DeleteBookingAdminButton onClick={handleClick}>
                Delete
              </DeleteBookingAdminButton>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        <h3>Your booking has been cancelled!</h3>

        <Link className="backToHomepage" to="/">
          Back to homepage
        </Link>
      </>
    );
  }
};
