import React, {useEffect} from "react";
import {useRef, useState} from "react";
import EditButton from "./buttons/EditButton";
import DeleteButton from "./buttons/DeleteButton";
import AddButton from "./buttons/AddButton";
import SaveButton from "./buttons/SaveButton";
import CancelButton from "./buttons/CancelButton";

export default function NewTask ({onAdd, isVisible, OnClickCancel}) {
    const taskClassNames = 'flex justify-between items-center border border-gray-100 py-3 px-4 my-2 rounded-md shadow hover:border-blue-100';
    const inputRef = useRef(null);
    const formRef = useRef(null);
    const [task, setTask] = useState({});
    const handleClickAdd = () => {
        formRef.current.requestSubmit();
    }

    const handleOnChange = (e) => {
        setTask({
            ...task,
            description: e.target.value
        });
    }

    const handleOnSubmit =  (e) => {
        e.preventDefault();
        inputRef.current.blur();
        onAdd(task);
    }

    useEffect(() => {
        if (isVisible) {
            inputRef.current.focus();
        }
    }, [isVisible]);

    return (
        <li className={taskClassNames} >
            <form ref={formRef} className={"w-10/12"} action={`/api/tasks/`} onSubmit={(e) => handleOnSubmit(e)}>
                <input type="text"
                       value={task.description ?? ''}
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
                <SaveButton onClick={handleClickAdd} />
                <CancelButton onClick={OnClickCancel} />
            </div>
        </li>
    )
}