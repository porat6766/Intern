import { connectDB } from "@/lib/db";
import { User } from "../MODELS/userModel";
import { IUserLogin, IUserSignUp } from "../Types/User";

export class UserService {

    static async createUser(username: string, email: string, password: string): Promise<IUserSignUp | null> {
        await connectDB();

        const existingUser = await User.findOne({ email });
        if (existingUser) return null;

        const newUser = await User.create({ username, email, password });
        return newUser;
    }

    static async getUserById(userId: string): Promise<IUserLogin | null> {
        await connectDB();
        return User.findById(userId);
    }

    static async getUserByEmail(email: string): Promise<IUserLogin | null> {
        await connectDB();
        return User.findOne({ email });
    }

    static async authenticateUser(email: string, password: string): Promise<IUserLogin | null> {
        await connectDB();
        const user = await User.findOne({ email });
        if (!user) return null;

        const isMatch = await user.comparePassword(password);
        return isMatch ? user : null;
    }
}
