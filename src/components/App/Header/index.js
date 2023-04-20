import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SidebarWrapper from './Sidebar';
import { Container, Header } from 'semantic-ui-react';
import { Icon } from 'semantic-ui-react';

function HeaderElement() {
    const navigate = useNavigate();

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <Container className='header'>
            <div className='logo'>
                <Header as="h1" onClick={() => navigate(`/home`)}>Gitit Regev</Header>
            </div>
            <div className='icons'>
                <a className='email' href='mailto:gititregev1@gmail.com'>
                    <Icon name='mail' size='big' />
                </a>
                <a className='linkedin' href='https://www.linkedin.com/in/gitit-regev-aa6a4961/' target='_blank' rel='noopener noreferrer'>
                    <Icon name='linkedin' size='big' />
                </a>
                <a className='github' href='https://github.com/gitit1?tab=repositories' target='_blank' rel='noopener noreferrer'>
                    <Icon name='github' size='big' />
                </a>
            </div>
            <div className='menu'>
                <Icon name='bars' onClick={() => setIsSideBarOpen(!isSideBarOpen)} />
                <SidebarWrapper isOpen={isSideBarOpen} setIsOpen={(toggle) => setIsSideBarOpen(toggle)} />
            </div>
        </Container>
    )
}

export default HeaderElement;