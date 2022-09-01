import React  from 'react';
import '../styles/scss/home.scss';
import gititImg from '../styles/assets/home/gitit.jpg';

export function Home() {
    return (
        <div className='page'>
            <div className='content'>
                <div className='details'>
                    <h1>Gitit Regev</h1>
                    <h2>Full Stack Developer</h2>
                    <p>My Name is Gitit Regev, I am a full stack developer from Israel</p>
                    <p>Coding is not only a job for me, I love the challenge in planning the work flow , solving issues and watching things come to live</p>
                </div>
                <div className='image'>
                    <img src={gititImg} />
                </div>
            </div>            
        </div>
    )
}