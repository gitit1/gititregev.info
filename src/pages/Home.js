import React, { useEffect, useState } from 'react';
import { useLocation } from "react-router-dom";
import { Container, Transition, Image } from 'semantic-ui-react';

import gititImg from '../styles/assets/home/gitit.jpg';
import '../styles/scss/home.scss';

export function Home() {
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const path = location.pathname.replace('/', '');
        setVisible(path === 'home');
    }, [location.pathname]);

    return (
        <div className='page'>
            <Container className='content'>
                <Transition as={Container} animation={"fade right"} duration={1000} visible={visible}>
                    <Container className='details'>
                        <h1>Gitit Regev</h1>
                        <h2>Full Stack Developer</h2>
                        <p>My Name is Gitit Regev, I am a full stack developer from Israel</p>
                        <p>Coding is not only a job for me, I love the challenge in planning the work flow , solving issues and watching things come to live</p>
                    </Container>
                </Transition>
                <Container className='image'>
                    <Transition animation={"drop"} duration={2000} visible={visible}>
                            <Image src={gititImg} />
                    </Transition>
                </Container>
            </Container>
        </div>
    )
}