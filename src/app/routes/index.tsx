import {Feed} from '@pages/Feed/Feed.tsx'
import {HeaderLayout} from '../layouts/HeaderLayout.tsx';
import {MainLayout} from "../layouts/MainLayout.tsx";
import '../styles/App.css'
import {withProviders} from "../providers";
import {Route, Routes} from 'react-router-dom';
import {Profile} from "@pages/Profile/Profile.tsx";
import {AvatarEdit} from "@pages/AvatarEdit/AvatarEdit.tsx";


function App() {

    return (
        <MainLayout>
            <Routes>
                <Route path="/profile/:id" element={
                    <Profile/>
                }/>
                <Route path="/edit/:id" element={
                    <AvatarEdit/>
                }/>
                <Route path="/" element={<HeaderLayout>
                    <Feed/>
                </HeaderLayout>}/>
            </Routes>
        </MainLayout>
    )
}

export default withProviders(App)
