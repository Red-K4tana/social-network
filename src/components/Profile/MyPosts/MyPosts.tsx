import React from "react";
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

const postData1 = {
    avatar: 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg',
    name: 'Acura Higaone',
    textPost: 'А текст через props то не вставляется!',
    time: '22:00',
}
const postData2 = {
    avatar: 'https://xrest.ru/schemes/00/02/01/80/%D0%90%D0%BD%D0%B8%D0%BC%D1%8D%D1%88%D0%BA%D0%B0-1.jpg',
    name: 'Yuki Kadono',
    textPost: 'А теперь вставляется))',
    time: '22:05',
}

export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={s.posts}>
                <div className={s.item}>
                    <Post
                        avatar={postData1.avatar}
                        name={postData1.name}
                        post={postData1.textPost}
                        time={postData1.time}
                    />
                </div>
                <div className={s.item}>
                    <Post
                        avatar={postData2.avatar}
                        name={postData2.name}
                        post={postData2.textPost}
                        time={postData2.time}
                    />
                </div>
                <div className={s.item}>
                    My post 2
                </div>
            </div>

        </div>
    )
}