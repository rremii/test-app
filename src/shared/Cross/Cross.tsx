import './Cross.css'
import {FC} from "react";

interface props {
    onClick?: () => void
}

export const Cross: FC<props> = ({onClick}) => {
    return <div className="cross" onClick={onClick}>
        <span/>
        <span/>
    </div>
}