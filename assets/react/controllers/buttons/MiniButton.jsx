import React from "react";



export default function MiniButton ({children, onClick, additionalClasses = ''}) {
    return (
        <button onClick={onClick} className={'border py-1 px-1 rounded-md shadow hover:shadow-md ' + additionalClasses}>
            {children}
        </button>
    );
}