import { IBooking } from "../models/IBooking";

export interface IAction {
  type: ActionType;
  payload: any;
}

export enum ActionType {
  GOTALLBOOKINGS,
  DELETEBOOKING,
  CREATENEWBOOKING,
  FILTERED,
}

export interface IBookingsState {
  bookings: IBooking[];
  filteredBookings: IBooking[];
}

export const BookingsReducer = (
  state: IBookingsState,
  action: IAction
): IBookingsState => {
  switch (action.type) {
    case ActionType.GOTALLBOOKINGS: {
      return {
        bookings: JSON.parse(action.payload),
        filteredBookings: JSON.parse(action.payload),
      };
    }

    case ActionType.DELETEBOOKING: {
      const listWithoutTheRemovedBooking = state.bookings.filter(
        (booking) => booking._id.toString() !== action.payload
      );

      const filteredListWithoutTheRemovedBooking =
        state.filteredBookings.filter(
          (booking) => booking._id.toString() !== action.payload
        );

      return {
        ...state,
        bookings: listWithoutTheRemovedBooking,
        filteredBookings: filteredListWithoutTheRemovedBooking,
      };
    }
    case ActionType.CREATENEWBOOKING: {
      const newBooking: IBooking = {
        _id: action.payload._id,
        people: action.payload.people,
        date: action.payload.date,
        sitting: action.payload.sitting,
        tables: action.payload.tables,
        guest: {
          name: action.payload.name,
          lastname: action.payload.lastname,
          email: action.payload.email,
          phone: action.payload.phone,
        },
      };

      return { ...state, bookings: [...state.bookings, newBooking] };
    }

    case ActionType.FILTERED: {
      const matchedBooking = state.bookings.filter(
        (b) => action.payload === b.date
      );

      const sortDate = [...matchedBooking].sort((a, b) =>
        a.date < b.date ? -1 : 1
      );

      return { ...state, filteredBookings: sortDate };
    }

    default:
      break;
  }

  return state;
};
