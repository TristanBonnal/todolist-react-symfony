import React from "react";

const defaultHandleClick = (e) => {
    console.log(e.currentTarget + ' clicked');
}

export default function MiniButton ({children, onClick = defaultHandleClick, additionalClasses = ''}) {
    return (
        <button onClick={onClick} className={'border py-1 px-1 rounded-md shadow hover:shadow-md ' + additionalClasses}>
            {children}
        </button>
    );
}