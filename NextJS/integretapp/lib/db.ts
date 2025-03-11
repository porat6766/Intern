import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
    throw new Error("❌ Please define MONGODB_URI in .env.local");
}

// Global caching to prevent multiple connections in development mode
let cached = (global as any).mongoose;

if (!cached) {
    cached = (global as any).mongoose = { conn: null, promise: null };
}

export async function connectDB() {
    if (cached.conn) return cached.conn;

    console.log("🔹 Connecting to MongoDB...");

    if (!cached.promise) {
        cached.promise = mongoose.connect(MONGODB_URI, {
            dbName: "myDatabase",
        }).then((mongoose) => {
            console.log("✅ MongoDB Connected!");
            return mongoose;
        }).catch((err) => {
            console.error("❌ MongoDB Connection Error:", err);
            throw err;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
