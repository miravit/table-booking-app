import { createContext } from "react";
import { IBooking } from "../models/IBooking";
import { IGuest } from "../models/IGuest";
import { IBookingsState } from "../reducers/BookingsReducer";

export interface IBookingContext {
  booking: IBooking;

  addBooking: () => Promise<IBooking>;
  updatePeople: (numberOfGuest: number) => void;
  updateSeating: (seatingTime: string) => void;
  updateForm: (guestInfo: IGuest) => void;
  updateDate: (chosenDate: any) => void;
  updateTables: (tables: number) => void;
}

export interface IAllBookingsContext {
  bookings: IBooking[];
  getBookings: () => void;
  fullyBooked: () => void;
  oneTableLeft: (showOrHideGuest: string) => void;
  disableSittingOption: (showOrHideTime: string, disable: string) => void;
}

export const CurrentBookingContext = createContext<IBookingContext>({
  booking: {
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
  },

  addBooking: () => {
    return new Promise<IBooking>((resolve) => {
      resolve({
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
    });
  },

  updatePeople: (numberOfGuest: number) => {
    return;
  },

  updateSeating: (seatingTime: string) => {
    return;
  },

  updateForm: (guestInfo: IGuest) => {
    return;
  },

  updateDate: (chosenData: any) => {
    return;
  },

  updateTables: (tables: number) => {
    return;
  },
});

export const BookingsContext = createContext<IAllBookingsContext>({
  bookings: [],

  getBookings: () => {
    return;
  },

  fullyBooked: () => {
    return;
  },

  oneTableLeft: (showOrHideGuest: string) => {
    return;
  },

  disableSittingOption: (showOrHideTime: string, disable: string) => {
    return;
  },
});

export const BookingAdminContext = createContext<IBookingsState>({
  bookings: [],
  filteredBookings: [],
});
