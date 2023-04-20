import React, { useEffect, useState } from 'react';
import { BrowserView, isMobile, MobileView } from 'react-device-detect';
import { useLocation } from "react-router-dom";
import { Container, Item, Header, Transition } from 'semantic-ui-react';

import ResumeDetails from '../components/Resume/ResumeDetails';
import ResumeDetailsSlide from '../components/Resume/ResumeDetailsSlide';

import MyResume from '../styles/assets/resume/resume-gitit-regev.docx';

import '../styles/scss/resume.scss';

export function Resume() {
    const location = useLocation();
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const path = location.pathname.replace('/', '');
        setVisible(path === 'resume');
    }, [location.pathname]);

    return (
        <Container className='page'>
            <Container className={`content ${isMobile ? 'mobile' : 'desktop'}`}>
                <Header as='h1'>My Resume</Header>
                <BrowserView><ResumeDetails visible={visible} /></BrowserView>
                <MobileView className="mobile-wrapper"><ResumeDetailsSlide Slidevisible={visible} /></MobileView>

                <h4>For my full resume you can visit my &nbsp;
                    <a href='https://www.linkedin.com/in/gitit-regev-aa6a4961/' target='_blank' rel='noopener noreferrer'>LinkedIn Profile</a>
                    &nbsp;or <a href={MyResume} >Download my CV</a></h4>
            </Container>
        </Container>
    )
}