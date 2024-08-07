import React from 'react';
import Task from './Task';
export default function (props) {
    const todos = JSON.parse(props.tasks);

    return (
        <div className="container mx-auto px-4">
            <h1 className="text-center text-blue-200 text-4xl">TODOLIST</h1>
            <ul className="mx-auto w-2/3 mt-12">
                {todos.map((todo) => <Task task={todo} />)}
            </ul>
        </div>
    );
}