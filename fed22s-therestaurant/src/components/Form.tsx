import { ChangeEvent, FormEvent, useContext, useState, useEffect } from "react";
import { IGuest } from "../models/IGuest";
import { FormStyled } from "./styled/FormStyled";
import { CurrentBookingContext } from "../contexts/BookingContext";
import { TermsAndConds } from "./TermsAndCond";
import { IFormError } from "../models/IFormError";
import { BookingConfirmButton } from "./styled/BookingButtons";
import { ErrorMessage } from "./styled/ErrorMessageStyled";
import { LoadingAnimation } from "./LoadingAnimation";

export const Form = () => {
  const { updateForm, addBooking, booking } = useContext(CurrentBookingContext);
  const [isLoading, setIsLoading] = useState(false);

  const [errors, setErrors] = useState<IFormError>({
    inputRequired: false,
    inputRequiredMessage: "",
  });

  const [showFirstname, setShowFirstname] = useState(false);
  const [showLastname, setShowLastname] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const [newBooking, setNewBooking] = useState<IGuest>({
    name: "",
    lastname: "",
    email: "",
    phone: 0,
  });

  useEffect(() => {
    validateFirstname();
    validateLastname();
    validateEmail();
    validatePhone();
  }, [newBooking]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;

    if (e.target.type === "text" || e.target.type === "email") {
      setNewBooking((prevBooking) => ({
        ...prevBooking,
        [name]: value,
      }));

      updateForm({ ...newBooking, [name]: value });
    }

    if (e.target.name === "phone") {
      setNewBooking((prevBooking) => ({
        ...prevBooking,
        [name]: +value,
      }));

      updateForm({ ...newBooking, [name]: +value });
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    await addBooking();
    setIsLoading(false);
  };

  const validateFirstname = (): boolean => {
    if (newBooking.name === "") {
      setErrors({
        ...errors,
        inputRequired: true,
        inputRequiredMessage: "This field is required",
      });
      setShowFirstname(true);
    } else {
      setErrors({ ...errors, inputRequired: false });
      setShowFirstname(false);
    }
    return false;
  };

  const validateLastname = (): boolean => {
    if (newBooking.lastname === "") {
      setErrors({
        ...errors,
        inputRequired: true,
        inputRequiredMessage: "This field is required",
      });
      setShowLastname(true);
    } else {
      setErrors({ ...errors, inputRequired: false });
      setShowLastname(false);
    }
    return false;
  };
  const validateEmail = (): boolean => {
    if (newBooking.email === "") {
      setErrors({
        ...errors,
        inputRequired: true,
        inputRequiredMessage: "This field is required",
      });
      setShowEmail(true);
    } else {
      setErrors({ ...errors, inputRequired: false });
      setShowEmail(false);
    }
    return false;
  };

  const validatePhone = (): boolean => {
    if (newBooking.phone === 0) {
      setErrors({
        ...errors,
        inputRequired: true,
        inputRequiredMessage: "This field is required",
      });
      setShowPhone(true);
    } else {
      setErrors({ ...errors, inputRequired: false });
      setShowPhone(false);
    }
    return false;
  };
  if (isLoading === false) {
    return (
      <>
        <div>
          <FormStyled onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Firstname"
              value={booking.guest.name}
              onChange={handleChange}
              required
            ></input>
            {showFirstname && errors.inputRequired && (
              <ErrorMessage className="error">
                {errors.inputRequiredMessage}
              </ErrorMessage>
            )}
            <input
              type="text"
              name="lastname"
              placeholder="Lastname"
              value={booking.guest.lastname}
              onChange={handleChange}
              required
            ></input>{" "}
            {showLastname && errors.inputRequired && (
              <ErrorMessage className="error">
                {errors.inputRequiredMessage}
              </ErrorMessage>
            )}
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={booking.guest.email}
              onChange={handleChange}
              required
            ></input>
            {showEmail && errors.inputRequired && (
              <ErrorMessage className="error">
                {errors.inputRequiredMessage}
              </ErrorMessage>
            )}
            <input
              type="number"
              name="phone"
              placeholder="Phone"
              value={booking.guest.phone}
              onChange={handleChange}
              required
            ></input>
            {showPhone && errors.inputRequired && (
              <ErrorMessage className="error">
                {errors.inputRequiredMessage}
              </ErrorMessage>
            )}
            <TermsAndConds></TermsAndConds>
            <BookingConfirmButton>Confirm Booking</BookingConfirmButton>
          </FormStyled>
        </div>
      </>
    );
  } else {
    return <>{isLoading && <LoadingAnimation></LoadingAnimation>}</>;
  }
};
