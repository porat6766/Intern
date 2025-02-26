import { NextResponse } from "next/server";
import connectToDatabase from "../../lib/mongodb";
import User from "../../models/User";
import { Model } from "mongoose";
import { IUser } from "@/app/types/userType";

export async function POST(req: Request) {
    await connectToDatabase();

    try {
        const { firstName, lastName, email, password } = await req.json();

        if (!firstName || !lastName || !email || !password) {
            return NextResponse.json({ error: "כל השדות חובה" }, { status: 400 });
        }

        const existingUser = await (User as Model<IUser>).findOne({ email }).exec() as IUser | null;
        if (existingUser) {
            return NextResponse.json({ error: "האימייל כבר רשום במערכת" }, { status: 400 });
        }

        console.log(password);




        const newUser = new User({
            firstName,
            lastName,
            email,
            password,
        });

        await newUser.save();
        console.log(newUser);

        return NextResponse.json({ message: "משתמש נוצר בהצלחה", user: newUser }, { status: 201 });

    } catch (error) {
        console.log("Server error:", error);
        return NextResponse.json({ error: "שגיאה בשרת" }, { status: 500 });
    }
}
