import type { NextApiRequest, NextApiResponse } from "next";
import connectToDatabase from "../../lib/mongoose";
import User from "../../models/User";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await connectToDatabase();

  if (req.method === "POST") {
    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).json({ error: "כל השדות חובה" });
    }

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "האימייל כבר רשום במערכת" });
      }

      const newUser = new User({ firstName, lastName, email, password });
      await newUser.save();

      return res.status(201).json({ message: "משתמש נוצר בהצלחה", user: newUser });

    } catch (error: any) {
      return res.status(500).json({ error: "שגיאה בשרת" });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}
