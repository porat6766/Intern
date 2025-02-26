import mongoose from "mongoose";

const MONGO_URI = process.env.KEY_MDB || "mongodb://localhost:27017/mydatabase";

if (!MONGO_URI) {
    throw new Error("Missing MONGO_URI in environment variables");
}

let cached = (global as any).mongoose || { conn: null, promise: null };

export default async function connectToDatabase() {
    if (cached.conn) {
        console.log("🔄 Using existing MongoDB connection");
        return cached.conn;
    }

    if (!cached.promise) {
        console.log("⚡ Connecting to MongoDB...");
        cached.promise = mongoose.connect(MONGO_URI, {}).then((mongoose) => mongoose);
    }

    cached.conn = await cached.promise;
    return cached.conn;
}
