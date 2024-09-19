import React from "react";
import { CheckCircleIcon} from '@heroicons/react/24/outline'
import MiniButton from "./MiniButton";

export default function SaveButton ({onClick}) {
    return (
        <MiniButton additionalClasses={'hover:bg-green-100 active:bg-green-200 self-end flex items-center'} onClick={onClick}>
            <CheckCircleIcon className="h-5 w-5 stroke-green-500"/>
        </MiniButton>
    );
}