import './FeedCell.css'
import {FC} from "react";
import {useNavigate} from "react-router-dom";

interface props {
    avatar: string
    name: string
}

export const FeedCell: FC<props> = ({name, avatar}) => {
    const navigate = useNavigate()


    const onClick = () => {
        navigate('/profile/1')
    }

    return <section onClick={onClick} className="feed-cell">
        <div className="avatar-cell">
            <img src={avatar} alt="avatar"/>
        </div>
        <h3 className="name">
            {name}
        </h3>
    </section>
}