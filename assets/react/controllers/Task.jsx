import React from "react";
import {useRef, useState} from "react";
import DeleteButton from "./buttons/DeleteButton";
import EditButton from "./buttons/EditButton";

export default function Task ({todo, onEdit, onDelete}) {
    console.log('render Task');
    const taskClassNames = 'flex justify-between items-center border border-gray-100 py-3 px-4 my-2 rounded-md shadow hover:border-blue-100';
    const inputRef = useRef(null);
    const [task, setTask] = useState(todo);
    const handleClickEdit = (e, id) => {
        inputRef.current.focus();
    }

    const handleOnChange = (e) => {
        setTask({
            ...task,
            description: e.target.value
        });
    }

    const handleOnSubmit = async (e, task) => {
        e.preventDefault();
        inputRef.current.blur();
        onEdit(e, task);
    }

    return (
        <li className={taskClassNames} data-id={task.id}>
            <form className={"w-10/12"} action={`/api/tasks/${task.id}`} onSubmit={(e) => handleOnSubmit(e, task)} >
                <input type="text"
                       value={task.description}
                       className="
                           w-full rounded border border-transparent py-1 pl-2 pr-20 text-gray-900 placeholder:text-gray-400 sm:text-sm
                           focus:outline-none focus:border-blue-200 focus:shadow sm:leading-6
                       "
                       ref={inputRef}
                          onChange={handleOnChange}
                       onBlur={e => (e.target.form.requestSubmit())}
                />
            </form>
            <div className="flex justify-between gap-2">
                <EditButton onClick={(e) => handleClickEdit(e, task.id)} />
                <DeleteButton onClick={onDelete} />
            </div>
        </li>
    );
}