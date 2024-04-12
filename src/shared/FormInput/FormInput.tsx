import './FormInput.css'
import {FC} from "react";

interface props {
    placeholder?:string
    name?:string
    type:string
}

export const FormInput:FC<props> = ({placeholder,type,name}) => {
    return <input type={type} name={name} placeholder={placeholder} className='form-input'/>
}