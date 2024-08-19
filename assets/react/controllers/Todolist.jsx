import React, {useState} from 'react';
import Task from './Task';
export default function Todolist ({tasks}) {
    const [todos, setTodos] = useState(JSON.parse(tasks));
    const handleDeleteTask = (id) => {
        setTodos(todos.filter((todo) => todo.id !== parseInt(id)));
    }

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

