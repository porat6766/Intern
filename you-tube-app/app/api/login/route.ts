import { NextRequest, NextResponse } from "next/server";
import connectToDatabase from "../../lib/mongodb";
import User from "../../models/User";
import bcrypt from "bcryptjs";
import { IUser } from "@/app/types/userType";
import { Model } from "mongoose";

export async function POST(req: NextRequest) {
    await connectToDatabase();

    try {
        const { email, password } = await req.json();
        console.log(email, password);

        if (!email || !password) {
            return NextResponse.json({ error: "נא למלא את כל השדות" }, { status: 400 });
        }

        // Use a type assertion or refine the typing
        const user = await (User as Model<IUser>).findOne({ email }).exec() as IUser | null;
        if (!user) {
            return NextResponse.json({ error: "לא נמצא משתמש עם האימייל הזה" }, { status: 404 });
        }

        const isMatch = await bcrypt.compare(password.trim(), user.password);

        if (!isMatch) {
            return NextResponse.json({ error: "אימייל או סיסמה שגויים" }, { status: 401 });
        }

        return NextResponse.json({ message: "התחברות הצליחה", user }, { status: 200 });

    } catch (error: unknown) {
        console.error("Server error:", error);
        return NextResponse.json({ error: "שגיאה בשרת" }, { status: 500 });
    }
}