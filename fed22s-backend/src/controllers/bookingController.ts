import { RequestHandler } from "express";
import { Booking } from "../models/Booking";

export const createBooking: RequestHandler = async (req, res, next) => {
  try {
    const { people, date, tables, sitting, guest } = req.body;
    const newBooking = await Booking.create({
      people: people,
      date: date,
      tables: tables,
      sitting: sitting,
      guest: guest,
    });

    return res.status(201).json(newBooking);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Sorry, couldn't create a new booking");
  }
};

export const deleteBooking: RequestHandler = async (req, res, next) => {
  try {
    const bookingId = req.params.id;

    await Booking.findByIdAndDelete(bookingId);
    console.log("function has been run");

    return res.send("deleted").status(204);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Sorry, couldn't delete booking");
  }
};

export const getAllBookings: RequestHandler = async (req, res, next) => {
  try {
    const bookings = await Booking.find();
    const totalBookings = await Booking.countDocuments();
    return res.status(200).json(bookings);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Sorry, couldn't get all bookings");
  }
};

export const updateBooking: RequestHandler = async (req, res, next) => {
  try {
    const bookingId = req.params.id;

    const { people, date, sitting, guest } = req.body;
    const sort = { _id: bookingId };
    const update = {
      people: people,
      date: date,
      sitting: sitting,
      guest: guest,
    };

    let booking = await Booking.findOneAndUpdate(sort, update, { new: true });

    return res.status(201).json(booking);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Sorry, couldn't update booking");
  }
};
