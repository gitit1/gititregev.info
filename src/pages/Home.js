import React, { useEffect, useState } from 'react';
import { isMobile } from 'react-device-detect';
import { useLocation } from "react-router-dom";
import { Container, Transition, Image, Header } from 'semantic-ui-react';

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
        <Container className='page'>
            <Container className='content'>
                <Transition as={Container} animation={"fade right"} duration={1000} visible={visible}>
                    <Container className='details'>
                        <Header as='h1' textAlign='center'>Gitit Regev</Header>
                        <Header as='h2' textAlign='center' >Full Stack Developer</Header>
                        <p>My Name is Gitit Regev, I am a full stack developer from Israel</p>
                        <p>Coding is not only a job for me, I love the challenge in planning the work flow , solving issues and watching things come to live</p>
                    </Container>
                </Transition>
                <Container className='image hide-on-mobile'>
                    <Transition animation={"drop"} duration={2000} visible={visible}>
                        <Image src={gititImg} />
                    </Transition>
                </Container>
            </Container>
        </Container>
    )
}