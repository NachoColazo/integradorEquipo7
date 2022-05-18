import React from 'react'
import "styles/assets.css"

const Button = ({children, filled}) => {
    return (
        <>
            <button className={`button ${filled && 'button--filled'}`}>{children}</button>
        </>
    )
}

export default Button