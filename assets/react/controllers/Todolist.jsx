import React, {useState} from 'react';
import Task from './Task';
import axios from "axios";
export default function Todolist ({tasks}) {
    const [todos, setTodos] = useState(JSON.parse(tasks));
    const handleDeleteTask = async (e, id) => {
        try {
            console.log(e.target);
            await axios.delete(`/api/tasks/${id}`);

            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error("Erreur lors de la suppression de la tâche :", error.message);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-center text-blue-200 text-4xl">TODOLIST</h1>
            <ul className="mx-auto w-2/3 mt-12">
                {todos.map((todo) => (
                    <Task
                        key={todo.id}
                        todo={todo}
                        onDelete={(e) => handleDeleteTask(e, todo.id)}
                    />)
                )}
            </ul>
        </div>
    );
}

