import React from 'react'

const Input = ({type, placeholder, value, setValue}) => {
    return (
        <input 
        type={type} 
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder={placeholder}
        />    
    )
}

export default Input
