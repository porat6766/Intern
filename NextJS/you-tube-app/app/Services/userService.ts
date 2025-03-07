import { LoginResponse } from "../types/userType";
import { userClient } from "../Utils/api";
import axios from "axios";

export const UserApiRequest = {

    login: async (email: string, password: string): Promise<LoginResponse> => {
        try {
            const response = await userClient.post<LoginResponse>("/login", { email, password });

            console.log("Login successful:", response.data);
            return response.data;
        } catch (error) {
            if (axios.isAxiosError(error)) {
                console.error("Login failed:", error.response?.data || error.message);
            } else {
                console.error("An unexpected error occurred:", error);
            }
            throw error;
        }
    },


}