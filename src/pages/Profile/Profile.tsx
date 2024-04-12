import './Profile.css'
import {GoToHome} from "@features/GoToHome/GoToHome.tsx";
import MockAvatar from '../../assets/mock-girl-avatar.png'
import MockAvatar2 from '../../assets/mock-girl-2.png'
import Picture from '../../assets/picture.svg'
import {useNavigate} from "react-router-dom";


export const Profile = () => {
    const navigate = useNavigate()


    const goToEditMode = () => {
        navigate('/edit/1')
    }

    return <section className="profile-page">
        <GoToHome/>
        <div className='avatar-cont'>
            <img className='avatar' src={MockAvatar} alt="avatar"/>
            <div className="avatar-slider">
                <img className='avatar-old' src={MockAvatar2} alt="avatar"/>
            </div>
        </div>
        <div className="options">
            <button onClick={goToEditMode} className='choose-btn'>
                <img src={Picture} alt="choose picture"/>
                <p>Choose photo from gallery</p>
            </button>
            <button onClick={goToEditMode} className='choose-btn'>
                <img src={Picture} alt="choose picture"/>
                <p>Take photo with camera</p>
            </button>
        </div>
    </section>
}