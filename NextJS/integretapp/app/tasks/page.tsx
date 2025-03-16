import { Task } from '@/AppConfig/Types/Task';
import React from 'react';



const fakeTasks: Task[] = Array.from({ length: 30 }, (_, i) => ({
    name: `Task ${i + 1}`,
    description: `This is a description for task ${i + 1}.`,
    dueDate: new Date(Date.now() + i * 86400000).toLocaleDateString(),
    priority: ['Low', 'Medium', 'High'][i % 3],
}));

const Tasks = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 p-6">
            <main className="flex-1 max-w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                <h1 className="col-span-full text-blue-600 text-3xl font-semibold mb-6 text-center">Task List</h1>
                {fakeTasks.map((task, index) => (
                    <div key={index} className="p-4 border rounded-lg shadow-lg bg-white transform hover:scale-105 transition-transform duration-300 ease-in-out">
                        <h2 className="text-xl font-bold">{task.name}</h2>
                        <p className="text-gray-600">{task.description}</p>
                        <p className="text-gray-500 text-sm">Due Date: {task.dueDate}</p>
                        <span className={`inline-block px-2 py-1 mt-2 text-sm font-semibold rounded ${task.priority === 'High' ? 'bg-red-500 text-white' : task.priority === 'Medium' ? 'bg-yellow-500 text-black' : 'bg-green-500 text-white'}`}>
                            {task.priority}
                        </span>
                    </div>
                ))}
            </main>
            <footer className="py-6 border-t border-gray-200 bg-white mt-8 text-center text-sm text-gray-500">
                <p>© 2024 IntegretApp. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Tasks;
