import axios from "axios";
import { IBooking } from "../models/IBooking";

//GET

export const getAllBookings = async () => {
  const response = await axios.get<IBooking[]>(
    "http://localhost:4000/api/v1/booking"
  );

  return response.data;
};

//CREATE

export const createNewBooking = async (
  booking: IBooking
): Promise<IBooking> => {
  console.log(booking);
  const response = await axios.post<IBooking>(
    "http://localhost:4000/api/v1/booking",
    booking
  );
  console.log(response.data);
  return response.data;
};

//PUT

export const updateBooking = async (id: number, booking: IBooking) => {
  const response = await axios.put<IBooking>(
    `http://localhost:4000/api/v1/booking/${id}`,
    booking
  );
};

//DELETEß

export const deleteBooking = async (id: string) => {
  const response = await axios.delete<IBooking>(
    `http://localhost:4000/api/v1/booking/${id}`
  );
};
