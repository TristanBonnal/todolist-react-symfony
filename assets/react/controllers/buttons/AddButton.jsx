import React from "react";
import { PlusCircleIcon} from '@heroicons/react/24/outline'
import MiniButton from "./MiniButton";

export default function AddButton ({onClick}) {
    return (
        <MiniButton additionalClasses={'hover:bg-green-100 active:bg-green-200 self-end flex items-center gap-2 px-3'} onClick={onClick}>
            <PlusCircleIcon className="h-5 w-5 stroke-green-500"/>
            Ajouter
        </MiniButton>
    );
}