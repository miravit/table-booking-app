import { useContext, useState, ChangeEvent, FormEvent, useEffect } from "react";
import { FormAdminStyled } from "./styled/FormStyled";
import { BookingDispatchContext } from "../contexts/BookingDispatchContext";
import { IBooking } from "../models/IBooking";
import { ActionType } from "../reducers/BookingsReducer";
import { createNewBooking } from "../services/restaurantApi";
import { IFormError } from "../models/IFormError";
import { ErrorMessage } from "./styled/ErrorMessageStyled";
import { ButtonAdmin } from "./styled/ButtonAdmin";
import { TextBooking } from "./styled/AdminBookingsContainer";

export const ShowCreateNewBooking = () => {
  const dispatch = useContext(BookingDispatchContext);

  const [errors, setErrors] = useState<IFormError>({
    inputRequired: false,
    inputRequiredMessage: "",
  });

  const [showDate, setShowDate] = useState(false);
  const [showGuest, setShowGuest] = useState(false);
  const [showSitting, setShowSitting] = useState(false);
  const [showTables, setShowTables] = useState(false);
  const [showFirstname, setShowFirstname] = useState(false);
  const [showLastname, setShowLastname] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showPhone, setShowPhone] = useState(false);

  const [newBookingAdmin, setNewBookingAdmin] = useState<IBooking>({
    _id: "",
    people: 0,
    date: "",
    sitting: "",
    tables: 0,
    guest: {
      name: "",
      lastname: "",
      email: "",
      phone: 0,
    },
  });

  useEffect(() => {
    validateDate();
    validateGuest();
    validateSitting();
    validateTables();
    validateFirstname();
    validateLastname();
    validateEmail();
    validatePhone();
  }, [newBookingAdmin]);

  const handleChangeAdmin = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;

    if (e.target.type === "text") {
      setNewBookingAdmin((prevBooking) => ({
        ...prevBooking,
        [name]: value,
      }));
    }

    if (e.target.type === "number") {
      setNewBookingAdmin((prevBooking) => ({
        ...prevBooking,
        [name]: +value,
      }));
    }
  };

  const handleChangeAdminGuest = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const name = e.target.name;
    if (e.target.type === "text" || e.target.type === "email") {
      setNewBookingAdmin((prevBooking) => ({
        ...prevBooking,
        guest: { ...prevBooking.guest, [name]: value },
      }));
    }

    if (e.target.type === "number") {
      console.log(typeof e.target.name);
      setNewBookingAdmin((prevBooking) => ({
        ...prevBooking,
        guest: { ...prevBooking.guest, [name]: +value },
      }));
    }
  };

  const handleSubmitAdmin = (e: FormEvent) => {
    e.preventDefault();

    dispatch({ type: ActionType.CREATENEWBOOKING, payload: newBookingAdmin });
    createNewBooking(newBookingAdmin);

    setNewBookingAdmin({
      _id: "",
      people: 0,
      date: "",
      sitting: "",
      tables: 0,
      guest: {
        name: "",
        lastname: "",
        email: "",
        phone: 0,
      },
    });
  };

  const validateDate = (): boolean => {
    if (newBookingAdmin.date === "") {
      setErrors({
        ...errors,
        inputRequired: true,
        inputRequiredMessage: "This field is required",
      });
      setShowDate(true);
    } else {
      setErrors({ ...errors, inputRequired: false });
      setShowDate(false);
    }

    return false;
  };

  const validateGuest = (): boolean => {
    if (newBookingAdmin.people === 0) {
      setErrors({
        ...errors,
        inputRequired: true,
        inputRequiredMessage: "This field is required",
      });
      setShowGuest(true);
    } else {
      setErrors({ ...errors, inputRequired: false });
      setShowGuest(false);
    }
    return false;
  };

  const validateSitting = (): boolean => {
    if (newBookingAdmin.sitting === "") {
      setErrors({
        ...errors,
        inputRequired: true,
        inputRequiredMessage: "This field is required",
      });
      setShowSitting(true);
    } else {
      setErrors({ ...errors, inputRequired: false });
      setShowSitting(false);
    }
    return false;
  };

  const validateTables = (): boolean => {
    if (newBookingAdmin.tables === 0) {
      setErrors({
        ...errors,
        inputRequired: true,
        inputRequiredMessage: "This field is required",
      });
      setShowTables(true);
    } else {
      setErrors({ ...errors, inputRequired: false });
      setShowTables(false);
    }
    return false;
  };
  const validateFirstname = (): boolean => {
    if (newBookingAdmin.guest.name === "") {
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
    if (newBookingAdmin.guest.lastname === "") {
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
    if (newBookingAdmin.guest.email === "") {
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
    if (newBookingAdmin.guest.phone === 0) {
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

  return (
    <>
      <FormAdminStyled onSubmit={handleSubmitAdmin}>
        <TextBooking>Date</TextBooking>
        <input
          type="text"
          name="date"
          placeholder="MM/DD/YYYY - example: 6/15/2023"
          value={newBookingAdmin.date}
          onChange={handleChangeAdmin}
          required
        ></input>
        {showDate && errors.inputRequired && (
          <ErrorMessage>{errors.inputRequiredMessage}</ErrorMessage>
        )}

        <TextBooking>Guests</TextBooking>
        <input
          type="number"
          name="people"
          placeholder="guests"
          value={newBookingAdmin.people}
          onChange={handleChangeAdmin}
          required
        ></input>
        {showGuest && errors.inputRequired && (
          <ErrorMessage>{errors.inputRequiredMessage}</ErrorMessage>
        )}

        <TextBooking>Sitting</TextBooking>
        <input
          type="text"
          name="sitting"
          placeholder="pick between 17-19 or 19-21"
          value={newBookingAdmin.sitting}
          onChange={handleChangeAdmin}
          required
        ></input>
        {showSitting && errors.inputRequired && (
          <ErrorMessage>{errors.inputRequiredMessage}</ErrorMessage>
        )}

        <TextBooking>Tables</TextBooking>
        <input
          type="number"
          name="tables"
          value={newBookingAdmin.tables}
          onChange={handleChangeAdmin}
          required
        ></input>
        {showTables && errors.inputRequired && (
          <ErrorMessage>{errors.inputRequiredMessage}</ErrorMessage>
        )}

        <TextBooking>Firstname</TextBooking>
        <input
          type="text"
          name="name"
          placeholder="Firstname"
          value={newBookingAdmin.guest.name}
          onChange={handleChangeAdminGuest}
          required
        ></input>
        {showFirstname && errors.inputRequired && (
          <ErrorMessage>{errors.inputRequiredMessage}</ErrorMessage>
        )}

        <TextBooking>Lastname</TextBooking>
        <input
          type="text"
          name="lastname"
          placeholder="Lastname"
          value={newBookingAdmin.guest.lastname}
          onChange={handleChangeAdminGuest}
          required
        ></input>
        {showLastname && errors.inputRequired && (
          <ErrorMessage>{errors.inputRequiredMessage}</ErrorMessage>
        )}

        <TextBooking>Email</TextBooking>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={newBookingAdmin.guest.email}
          onChange={handleChangeAdminGuest}
          required
        ></input>
        {showEmail && errors.inputRequired && (
          <ErrorMessage>{errors.inputRequiredMessage}</ErrorMessage>
        )}

        <TextBooking>Phone</TextBooking>
        <input
          type="number"
          name="phone"
          placeholder="Phone"
          value={newBookingAdmin.guest.phone}
          onChange={handleChangeAdminGuest}
          required
        ></input>
        {showPhone && errors.inputRequired && (
          <ErrorMessage>{errors.inputRequiredMessage}</ErrorMessage>
        )}
        <ButtonAdmin className="confirmBookingAdmin" type="submit">
          Confirm new booking
        </ButtonAdmin>
      </FormAdminStyled>
    </>
  );
};
