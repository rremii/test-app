import './Feed.css'
import {FeedCell} from "@widgets/FeedCell/FeedCell.tsx";
import {Footer} from "@widgets/Footer/Footer.tsx";
import {useMemo} from "react";
import MockAvatar from '../../assets/mock-girl-avatar.png'


export const Feed = () => {

    const feedCells = useMemo(() => [
        {name: "Lego", avatar: MockAvatar},
        {name: "Lego", avatar: MockAvatar},
        {name: "Lego", avatar: MockAvatar},
    ],[])

    return <section className="feed-page">
        {feedCells.map((profileData,index) => (
            <FeedCell key={index} {...profileData}/>
        ))}
        <Footer/>
    </section>
}