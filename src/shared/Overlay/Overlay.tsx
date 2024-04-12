import './Overlay.css'
import {FC} from "react";

interface props {
    onClick?: () => void
}

export const Overlay: FC<props> = ({onClick}) => {
    return <div onClick={onClick} className="overlay"/>
}