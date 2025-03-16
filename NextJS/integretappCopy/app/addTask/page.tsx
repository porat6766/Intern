'use client'

import React from 'react';
import { useForm } from 'react-hook-form';
import { Task } from '../../AppConfig/Types/Task';

const Page = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Task>();

  const onSubmit = (data: Task) => {
    console.log('Task added:', data);
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-8">
      <h1 className="text-3xl font-semibold text-center mb-6">Add Task</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

        <div>
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">Task Name</label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Task name is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="description" className="block text-lg font-medium text-gray-700">Description</label>
          <input
            type="text"
            id="description"
            {...register('description', { required: 'Description is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

        <div>
          <label htmlFor="dueDate" className="block text-lg font-medium text-gray-700">Due Date</label>
          <input
            type="date"
            id="dueDate"
            {...register('dueDate', { required: 'Due date is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {errors.dueDate && <p className="text-red-500 text-sm mt-1">{errors.dueDate.message}</p>}
        </div>

        <div>
          <label htmlFor="priority" className="block text-lg font-medium text-gray-700">Priority</label>
          <select
            {...register('priority', { required: 'Priority is required' })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
          {errors.priority && <p className="text-red-500 text-sm mt-1">{errors.priority.message}</p>}
        </div>

        <button
          type="submit"
          className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 mt-4"
        >
          Add Task
        </button>
      </form>
    </div>
  );
};

export default Page;
