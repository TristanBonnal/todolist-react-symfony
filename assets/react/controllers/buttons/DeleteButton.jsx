import React from "react";
import { TrashIcon } from '@heroicons/react/24/outline'
import MiniButton from "./MiniButton";

export default function DeleteButton () {
    return (
        <MiniButton additionalClasses={'hover:bg-red-100 active:bg-red-200'}>
            <TrashIcon className="h-5 w-5 stroke-red-400"/>
        </MiniButton>
    );
}