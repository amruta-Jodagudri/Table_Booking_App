import { bookings } from "../../utils/db";

export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json(bookings);
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}
