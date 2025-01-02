import { bookings } from "../../utils/db";

export default function handler(req, res) {
  if (req.method === 'DELETE') {
    const { id } = req.query;

    const index = bookings.findIndex((booking) => booking.id === id);
    if (index === -1) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    bookings.splice(index, 1);
    res.status(200).json({ message: 'Booking deleted successfully' });
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
