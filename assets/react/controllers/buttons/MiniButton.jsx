import React from "react";

export default function MiniButton ({icon, additionalClasses = ''}) {

    return (
        <button className={'border py-1 px-1 rounded-md shadow ' + additionalClasses}>
            {icon}
        </button>
    );
}