import { IGuest } from "./IGuest";

export interface IBooking {
  _id: string;
  people: number;
  date: string;
  sitting: string;
  tables: number;
  guest: IGuest;
}

export const defaultBooking = {
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
};
