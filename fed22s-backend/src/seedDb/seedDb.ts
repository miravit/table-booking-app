require("dotenv").config();
import { Booking, IBooking, bookingSchema } from "../models/Booking";
import { mockBookingsData } from "./bookings";

import mongoose from "mongoose";
const populateDbWithMockData = async (connectionString: string) => {
  try {
    mongoose.set("strictQuery", false);

    const conn = await mongoose.connect(connectionString);

    console.log(`MongoDB connected: ${conn.connection.host}`);

    await Booking.deleteMany();

    const res = await Booking.create(mockBookingsData);

    console.log("Created:", res);

    console.log("Database successfully populated with test data");

    const bookingsFromDb = await Booking.find<IBooking>();

    console.log(bookingsFromDb);
  } catch (error) {
    console.error(error);
  } finally {
    process.exit(0);
  }
};

populateDbWithMockData(process.env.MONGODB_URI || "");
