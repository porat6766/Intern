import mongoose from "mongoose";
import User from "../models/User";

const MONGO_URI = process.env.KEY_MDB;

if (!MONGO_URI) {
    throw new Error("Missing MONGO_URI in environment variables");
}

interface MongooseCache {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
}


declare global {
    var mongooseGlobal: MongooseCache | undefined;
}


globalThis.mongooseGlobal = globalThis.mongooseGlobal || { conn: null, promise: null };

const cached: MongooseCache = globalThis.mongooseGlobal;

export default async function connectToDatabase() {
    if (cached.conn) {
        console.log("🔄 Using existing MongoDB connection");
        return cached.conn;
    }

    if (!cached.promise) {
        console.log("⚡ Connecting to MongoDB...");
        cached.promise = mongoose.connect(MONGO_URI!).then((mongooseInstance) => {
            console.log("✅ Connected to MongoDB");
            return mongooseInstance;
        }).catch((error: unknown) => {
            console.error("❌ MongoDB connection error:", error);
            throw error;
        });
    }

    cached.conn = await cached.promise;

    loadSchemas();

    return cached.conn;
}

function loadSchemas() {
    try {
        if (!mongoose.models.User) {
            mongoose.model("User", User.schema);
            console.log("✅ User schema loaded");
        }
    } catch (error: unknown) {
        console.error("⚠️ Schema loading error:", error);
    }
}
