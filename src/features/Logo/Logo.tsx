import './Logo.css'
import {useNavigate} from "react-router-dom";

export const Logo = () => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate('/')
    }

    return <h1 onClick={onClick} className="logo">
        OneAI
    </h1>
}