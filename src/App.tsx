import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div className="app-wrapper">
            <header className="header grid__item">
                <img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" alt="logo"/>
                header
            </header>
            <nav className="sidebar grid__item">
                <div>
                    <a href="1">Profile</a>
                </div>
                <div>
                    <a href="1">Messages</a>
                </div>
                <div>
                    <a href="1">News</a>
                </div>
                <div>
                    <a href="1">Music</a>
                </div>
                <div>
                    <a href="1">Settings</a>
                </div>
            </nav>
            <div className="content grid__item">
                <div>
                    <img src="https://cdn.pixabay.com/photo/2017/10/10/22/24/wide-format-2839089_960_720.jpg" alt=""/>
                </div>
                <div className="avatar">
                    <img
                        src="data:image/jpeg;base64,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"
                        alt=""/>
                    ava + description
                </div>
                <div>
                    my posts
                    <div>
                        new post
                    </div>
                    <div>
                        <div>
                            post 1
                        </div>
                        <div>
                            post 2
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
}

export default App;
