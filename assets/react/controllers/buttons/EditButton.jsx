import React from "react";
import { PencilIcon } from '@heroicons/react/24/outline'
import MiniButton from "./MiniButton";

export default function EditButton () {
    return (
        <MiniButton
            icon={<PencilIcon className="h-5 w-5 stroke-blue-400"/>}
            additionalClasses={'hover:bg-blue-100 active:bg-blue-200'}
        />
    );
}