

import { connectDB } from '@/app/database/db';
import Consulta from '@/app/models/consulta';


export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    try {
      const consulta = new Consulta(req.body);
      await consulta.save();
      res.status(201).json({ success: true, data: consulta });
    } catch (error) {
      res.status(400).json({ success: false, error: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
