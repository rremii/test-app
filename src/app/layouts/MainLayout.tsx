import {FC} from "react";
import './MainLayout.css'

interface props {
    children: React.ReactNode
}

export const MainLayout: FC<props> = ({children}) => {


    return <main className='main-layout'>
        {children}
    </main>
}