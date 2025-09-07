import { useState } from "react";
import Task from "./Task";
import './App.css';



function App() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    // Add Task
    const addTask = () => {
        if (newTask.trim() === "") return;
        const task = {
            id: Date.now(),
            text: newTask,
            completed: false,
        };
        setTasks([...tasks, task]);
        setNewTask("");
    };

    // Toggle Complete
    const toggleComplete = (id) => {
        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    // Delete Task
    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    return (
        <div className="p-6 max-w-md mx-auto">
            <h1 className="text-2xl font-bold mb-4 text-center">✅ Task Tracker</h1>

            {/* Input */}
            <div className="flex mb-4">
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="flex-grow border p-2 rounded-l-md"
                    placeholder="Enter a new task..."
                />
                <button
                    onClick={addTask}
                    className="bg-blue-500 text-white px-4 rounded-r-md"
                >
                    Add
                </button>
            </div>

            {/* Task List */}
            {tasks.length === 0 ? (
                <p className="text-gray-500 text-center">No tasks yet 🚀</p>
            ) : (
                tasks.map((task) => (
                    <Task
                        key={task.id}
                        task={task}
                        toggleComplete={toggleComplete}
                        deleteTask={deleteTask}
                    />
                ))
            )}
        </div>
    );
}

export default App;
