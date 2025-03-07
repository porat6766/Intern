import { Document } from "mongoose";
export interface LoginResponse {
    token: string;
    user: {
        id: number;
        email: string;
        name: string;
    };
}

export interface IUser extends Document {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    createdAt: Date;
}
