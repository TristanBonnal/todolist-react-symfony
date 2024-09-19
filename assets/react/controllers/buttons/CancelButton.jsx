import React from "react";
import {TrashIcon, XMarkIcon} from '@heroicons/react/24/outline'
import MiniButton from "./MiniButton";


export default function CancelButton ({onClick}) {
    return (
        <MiniButton onClick={onClick} additionalClasses={'hover:bg-red-100 active:bg-red-200'}>
            <XMarkIcon className="h-5 w-5 stroke-red-400"/>
        </MiniButton>
    );
}