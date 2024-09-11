import React, { useState, useCallback } from 'react';
import Task from './Task';
import axios from "axios";

export default function Todolist({ tasks }) {
    console.log('render Todolist');
    const [todos, setTodos] = useState(JSON.parse(tasks));

    const handleEditTask = useCallback(async (e, task) => {
        // Trouver l'ancienne tâche dans l'état actuel
        const oldTask = todos.find(todo => todo.id === task.id);

        // Si la description n'a pas changé, on sort sans appeler l'API
        if (oldTask && oldTask.description === task.description) {
            console.log("Pas de changement dans la tâche, annulation de l'update.");
            return;
        }

        // Appel API pour mettre à jour la tâche
        try {
            await axios.put(e.target.action, {
                description: task.description
            });
        } catch (error) {
            console.error("Erreur lors de la mise à jour de la tâche :", error.message);
        }

        // Mise à jour locale des tâches
        const newTodos = todos.map((todo) => {
            if (todo.id === task.id) {
                return task; // Remplacer par la nouvelle tâche
            }
            return todo;
        });

        setTodos(newTodos);
    }, [todos]);

    const handleDeleteTask = useCallback(async (e, id) => {
        try {
            console.log(e.target);
            await axios.delete(`/api/tasks/${id}`);

            // Mise à jour locale pour retirer la tâche supprimée
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.error("Erreur lors de la suppression de la tâche :", error.message);
        }
    }, [todos]);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-center text-blue-200 text-4xl">TODOLIST</h1>
            <ul className="mx-auto w-2/3 mt-12">
                {todos.map((todo) => (
                    <Task
                        key={todo.id}
                        todo={todo}
                        onEdit={handleEditTask}
                        onDelete={(e) => handleDeleteTask(e, todo.id)}
                    />
                ))}
            </ul>
        </div>
    );
}
