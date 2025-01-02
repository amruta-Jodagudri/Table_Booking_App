import { bookings } from "../../utils/db";

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name, contact, date, time, guests } = req.body;

    if (!name || !contact || !date || !time || !guests) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    const bookingExists = bookings.some(
      (booking) => booking.date === date && booking.time === time
    );

    if (bookingExists) {
      return res.status(409).json({ error: 'Time slot already booked' });
    }

    const newBooking = { name, contact, date, time, guests };
    bookings.push(newBooking);
    return res.status(201).json(newBooking);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
