import './SignIn.css'
import {createPortal} from "react-dom";
import {SignInModal} from "@widgets/SignInModal/SignInModal.tsx";
import {useState} from "react";

export const SignIn = () => {
    const [isModalOpened, setModalOpened] = useState(false)

    const openModal = () => {
        setModalOpened(true)
    }
    const closeModal = () => {
        setModalOpened(false)
    }

    return <>
        <button onClick={openModal} className="sign-in-btn">
            Sign In
        </button>
        {createPortal(<SignInModal isActive={isModalOpened} onClose={closeModal}/>, document.body)}
    </>
}