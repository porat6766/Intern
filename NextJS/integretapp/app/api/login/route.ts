import { NextResponse } from "next/server";
import { UserService } from "../../../AppConfig/Services/UserService";
import { sign } from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET as string;

export async function POST(req: Request) {
    try {
        const { email, password } = await req.json();
        console.log("Login attempt:", email);

        if (!email || !password) {
            return NextResponse.json({ error: "Email and password are required" }, { status: 400 });
        }

        const user = await UserService.authenticateUser(email, password);
        if (!user) {
            return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
        }

        // Generate JWT token
        const token = sign({ id: user?._id, email: user.email }, SECRET_KEY, { expiresIn: "7d" });

        return NextResponse.json(
            { message: "Login successful", user, token },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error in /api/login:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
