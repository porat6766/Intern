import axios from "axios";

export const userClient = axios.create({
    baseURL: "http://localhost:3000/users",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.NEXT_PUBLIC_API_KEY}` // במידת הצורך
    }
});

