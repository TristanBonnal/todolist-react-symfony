import React from "react";
import DeleteButton from "./buttons/DeleteButton";
import EditButton from "./buttons/EditButton";

export default function Task ({task, onDelete}) {
    const taskClassNames = 'flex justify-between items-center border border-gray-100 py-3 px-4 my-2 rounded-md shadow hover:border-blue-100';

    return (
        <li className={taskClassNames} data-id={task.id}>
            <p>{task.description}</p>
            <div className="flex justify-between gap-2">
                <EditButton />
                <DeleteButton onClick={onDelete} />
            </div>
        </li>
    );
}