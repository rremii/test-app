import {FormInput} from "@shared/FormInput/FormInput.tsx";
import {FormSubmit} from "@shared/FormSubmit/FormSubmit.tsx";
import './SignInForm.css'
import {FC} from "react";

interface props {
    onSubmit?: (values: formValues) => void
}

export interface formValues {
    email: string
    password: string
}

export const SignInForm: FC<props> = ({onSubmit}) => {


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        const formData = new FormData(e.currentTarget)

        if (onSubmit)
            onSubmit(Object.fromEntries(formData.entries()) as unknown as formValues)


        e.currentTarget.reset()
    }

    return <form onSubmit={handleSubmit} className="sign-in-form">
        <FormInput name='email' type='email' placeholder='Email'/>
        <FormInput name='password' type='password' placeholder='Password'/>
        <FormSubmit>Sign in</FormSubmit>
    </form>
}