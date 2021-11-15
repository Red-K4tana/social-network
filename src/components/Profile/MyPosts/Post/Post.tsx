import React from 'react';
import s from './Post.module.css';


export const Post = (props: any) => {
    return (
        <div className={s.post}>
            <div className={s.block_ava}>
                <div className={s.ava}>
                    <img src={props.avatar} alt=""/>
                </div>
            </div>
            <div className={s.block_content}>
                <div className={s.content}>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    <div className={s.text}>
                        {props.post}
                    </div>
                </div>
            </div>
            <div className={s.block_time}>
                <div className={s.time}>
                    {props.time}
                </div>
            </div>
        </div>

    )
}