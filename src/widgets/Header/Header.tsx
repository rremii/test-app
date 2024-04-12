import './Header.css'
import {Logo} from "@features/Logo/Logo.tsx";
import {SignIn} from "@features/SignIn/SignIn.tsx";
import {useContext} from "react";
import {AuthContext} from "@entities/auth/Context.ts";


export const Header = () => {

    const {isLoggedIn} = useContext(AuthContext)

    return <header className="header">
        <Logo/>
        {!isLoggedIn && <SignIn/>}
    </header>
}