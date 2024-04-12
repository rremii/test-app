import './AvatarEdit.css'
import MockAvatar from '../../assets/mock-girl-avatar.png'
import {useNavigate} from "react-router-dom";


export const AvatarEdit = () => {

    const navigate = useNavigate()


    const onMorePicturesClick = () => {
        navigate('/')
    }

    return <section className="avatar-page">
        <img className='avatar-edit' src={MockAvatar} alt="avatar"/>
        <button className='save-btn '>
            Save
        </button>
        <button onClick={onMorePicturesClick} className='more-btn'>
            More pics
        </button>
    </section>
}