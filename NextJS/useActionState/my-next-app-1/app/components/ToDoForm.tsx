"use client";
import { startTransition, useActionState } from "react";
import { addToDo, todos, toggleToDo } from "@/app/actions/todoActions";

export default function ToDoForm() {

    const [state, formAction] = useActionState(addToDo, {
        todos: todos || [],
        success: "",
    });
    const [stateToggle, toggleAction] = useActionState(toggleToDo, {
        todos: todos || [],
        success: "",
    });

    const handleToggle = (todoId: string) => {
        startTransition(() => {
            toggleAction(todoId);
        });
    };

    return (
        <div>
            <h2>📌 To-Do List</h2>

            {state?.error && <p style={{ color: "red" }}>⚠️ {state.error.title?._errors[0]}</p>}
            {state?.success && <p style={{ color: "green" }}>{state.success}</p>}

            <form action={formAction}>
                <input name="title" placeholder="Task name..." />
                <input type="hidden" name="completed" value="false" />
                <button type="submit">➕ Add Task</button>
            </form>

            <ul>
                {state.todos?.length ? (
                    state.todos.map((todo) => (
                        <li
                            onClick={() => handleToggle(todo.id)}
                            className="cursor-pointer"
                            key={todo.id}
                        >
                            {todo.completed ? "✅" : "🔘"} {todo.title}
                        </li>
                    ))
                ) : (
                    <li>No tasks yet.</li>
                )}
            </ul>
        </div>
    );
}
