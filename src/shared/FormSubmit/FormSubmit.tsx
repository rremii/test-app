import {FC, ReactNode} from "react";
import './FormSubmit.css'

interface props {
    children: ReactNode
}

export const FormSubmit: FC<props> = ({children}) => {
    return <button className='form-submit' type="submit">{children}</button>
}