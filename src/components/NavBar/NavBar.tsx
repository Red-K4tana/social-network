import React from "react";
import s from './NavBar.module.css';

export const NavBar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <a href="1">Profile</a>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href="1">Messages</a>
            </div>
            <div className={s.item}>
                <a href="1">News</a>
            </div>
            <div className={s.item}>
                <a href="1">Music</a>
            </div>
            <div className={s.item}>
                <a href="1">Settings</a>
            </div>
        </nav>
    )
}