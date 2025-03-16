from motor.motor_asyncio import AsyncIOMotorClient
from fastapi import FastAPI
from pydantic import BaseModel
import os

app = FastAPI()

# MongoDB connection string (replace it with your MongoDB URI)
MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
client = AsyncIOMotorClient(MONGO_URI)

# Database name
db = client["auth_db"]

# Collection name (similar to a table in SQL)
users_collection = db["users"]

# Create an async function to get the database collection


async def get_user_collection():
    return users_collection
