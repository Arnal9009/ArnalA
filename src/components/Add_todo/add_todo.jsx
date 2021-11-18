import React from 'react'
import Button from '../../UI/button/button'
import Input from '../../UI/input/input'


export const AddTodo = ({value, setValue, add}) => {
    return (
        <div>
            <Input 
            value={value}
            setValue={setValue}
            placeholder={'enter task'} type={'text'}/>   
            <Button
            onclick={add}
            >add</Button>
        </div>
    )
}
