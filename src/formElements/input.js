import React from 'react';

export const Input = (props) => {
    const {type, className, name, placeholder} = props;

    return(
        <input
            type={type}
            className={className}
            name={name}
            placeholder={placeholder}/>
    )
};