import { Schema, model, models } from "mongoose";

const TaskSchema = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        dueDate: { type: Date, required: true },
        priority: { type: String, enum: ["low", "medium", "high"], required: true },
    },
    { timestamps: true }
);

export const Task = models.Task || model("Task", TaskSchema);
