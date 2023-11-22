import { Router } from "express";
import {
  createBooking,
  deleteBooking,
  getAllBookings,
  updateBooking,
} from "../controllers/bookingController";

const router: Router = Router();

router.post("/", createBooking);
router.delete("/:id", deleteBooking);
router.get("/", getAllBookings);
router.put("/:id", updateBooking);

export default router;
