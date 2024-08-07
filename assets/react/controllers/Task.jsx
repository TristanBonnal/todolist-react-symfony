import React from "react";

export default function Task ({task}) {
    const taskClassNames = 'border border-gray-100 py-2 px-6 my-2 rounded-md shadow hover:shadow-md hover:border-blue-100';

    return (
        <li key={task.id} className={taskClassNames}>
            {task.description}
        </li>
    );
}