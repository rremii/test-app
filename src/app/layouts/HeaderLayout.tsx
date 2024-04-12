import {FC} from "react";
import './HeaderLayout.css'
import {Header} from "@widgets/Header/Header.tsx";

interface props {
    children: React.ReactNode
}

export const HeaderLayout: FC<props> = ({children}) => {

    return <div className='header-layout'>
        <Header/>
        {children}
    </div>
}