import React, {useState} from 'react';
import Task from './Task';
import axios from "axios";
export default function Todolist ({tasks}) {
    const [todos, setTodos] = useState(JSON.parse(tasks));
    const handleDeleteTask = async (id) => {
        try {
            // Effectuer la requête DELETE à l'API
            await axios.delete(`/api/tasks/${id}`);

            // Si la suppression est réussie, mettre à jour l'état local
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error("Erreur lors de la suppression de la tâche :", error);
        }
    };

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-center text-blue-200 text-4xl">TODOLIST</h1>
            <ul className="mx-auto w-2/3 mt-12">
                {todos.map((todo) => (
                    <Task
                        key={todo.id}
                        task={todo}
                        onDelete={() => handleDeleteTask(todo.id)}
                    />)
                )}
            </ul>
        </div>
    );
}

