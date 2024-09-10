import React from "react";
import {useRef, useState} from "react";
import DeleteButton from "./buttons/DeleteButton";
import EditButton from "./buttons/EditButton";
import axios from "axios";

export default function Task ({todo, onDelete}) {
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

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        inputRef.current.blur();
        if (task.description === todo.description) {
            return;
        }

        try {
            await axios.put(e.target.action, {
                description: task.description
            });
        } catch (error) {
            console.error("Erreur lors de la mise à jour de la tâche :", error.message);
        }
    }

    return (
        <li className={taskClassNames} data-id={task.id}>
            <form className={"w-10/12"} action={`/api/tasks/${task.id}`} onSubmit={handleOnSubmit} >
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