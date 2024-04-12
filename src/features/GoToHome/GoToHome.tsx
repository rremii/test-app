import './GoHome.css'
import arrowBack from './../../assets/arrow-back.svg'
import {useNavigate} from "react-router-dom";

export const GoToHome = () => {
    const navigate = useNavigate()

    const onClick = () => {
        navigate('/')
    }
    
    return <button onClick={onClick} className="go-home">
        <img src={arrowBack} alt="arrow"/> Go Back</button>
}