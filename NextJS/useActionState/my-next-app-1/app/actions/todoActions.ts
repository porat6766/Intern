import { z } from "zod";

//
const todoSchema = z.object({
    title: z.string().min(3, "The title must be at least 3 characters long"),
    completed: z.boolean(),
});


export let todos = [
    { id: "1", title: "Finish the project", completed: false },
];


export async function addToDo(prevState: any, formData: FormData) {
    const parsedData = todoSchema.safeParse({
        title: formData.get("title"),
        completed: formData.get("completed") === "true",
    });

    if (!parsedData.success) {
        return { error: parsedData.error.format() };
    }

    const newTodo = {
        id: (todos.length + 1).toString(),
        ...parsedData.data,
    };

    todos.push(newTodo);

    return { success: "Task added successfully!", todos };
}

// Function to toggle the completion status of a todo
export async function toggleToDo(prevState: any, todoId: string) {
    const todo = todos.find(t => t.id === todoId);

    if (!todo) {
        return { error: { message: "Task not found" } };
    }

    todo.completed = !todo.completed;

    return { success: "Task updated successfully!", todos };
}
