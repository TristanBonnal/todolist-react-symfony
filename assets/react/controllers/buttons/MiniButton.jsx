import React from "react";

export default function MiniButton ({children, additionalClasses = ''}) {
    return (
        <button className={'border py-1 px-1 rounded-md shadow ' + additionalClasses}>
            {children}
        </button>
    );
}