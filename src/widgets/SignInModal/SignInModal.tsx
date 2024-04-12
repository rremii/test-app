import './Sign-in-modal.css'
import {FC} from "react";
import {Cross} from "@shared/Cross/Cross.tsx";
import {formValues, SignInForm} from "@features/SignInForm/SignInForm.tsx";
import {Overlay} from "@shared/Overlay/Overlay.tsx";
import {dispatchAuth} from "@entities/auth/Provider.tsx";

interface props {
    isActive?: boolean
    onClose?: () => void
}

export const SignInModal: FC<props> = ({isActive, onClose}) => {


    const onFormSubmit = (values: formValues) => {
        dispatchAuth({type: "SET_IS_LOGGED_IN", payload: true})

        console.log('email: ' + values.email)
        console.log('password: ' + values.password)
        if (onClose) onClose()
    }

    return <>
        <div className={`sign-in-modal ${isActive ? 'active' : ''}`}>
            <Overlay onClick={onClose}/>
            <Cross onClick={onClose}/>
            <SignInForm onSubmit={onFormSubmit}/>
        </div>
    </>
}