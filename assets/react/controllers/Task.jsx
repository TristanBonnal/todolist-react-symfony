import React from "react";
import DeleteButton from "./buttons/DeleteButton";
import EditButton from "./buttons/EditButton";

export default function Task ({task}) {
    const taskClassNames = 'flex justify-between items-center border border-gray-100 py-3 px-4 my-2 rounded-md shadow hover:shadow-md hover:border-blue-100';

    return (
        <li key={task.id} className={taskClassNames}>
            <p>{task.description}</p>
            <div className="flex justify-between gap-2">
                <EditButton />
                <DeleteButton />
            </div>
        </li>
    );
}