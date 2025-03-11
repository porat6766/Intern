import { NextResponse } from "next/server";
import { UserService } from "../../../AppConfig/Services/UserService";

export async function POST(req: Request) {
    try {

        const { username, email, password } = await req.json();
        console.log(username, email, password);

        if (!username || !email || !password) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }


        const newUser = await UserService.createUser(username, email, password);
        if (!newUser) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        return NextResponse.json({ message: "User created successfully", user: newUser }, { status: 201 });
    } catch (error) {
        console.error("Error in /api/signup:", error);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
