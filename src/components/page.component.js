import React from 'react'

export default function Page({ title, classNameProp }) {
    return (
        <h1 className={`${classNameProp}`}>{title}</h1>
    )
}

