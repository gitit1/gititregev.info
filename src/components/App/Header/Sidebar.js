import React from 'react'
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, Sidebar, Icon } from 'semantic-ui-react';

const SidebarWrapper = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const path = location.pathname.replace('/', '');

    return (
        <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={() => setIsOpen(false)}
            vertical
            visible={isOpen}
            width='thin'
            direction='right'
        >
            <Menu.Item
                onClick={() => navigate(`/home`)}
                active={path === 'home'}
            >
                Home
            </Menu.Item>
            <Menu.Item
                onClick={() => navigate(`/resume`)}
                active={path === 'resume'}
            >
                Resume
            </Menu.Item>
            <Menu.Item
                onClick={() => navigate(`/projects`)}
                active={path === 'projects'}
            >
                Projects
            </Menu.Item>
            <Menu.Item
                onClick={() => window.location = "mailto:gititregev1@gmail.com"}
                className='showContentOnlyOnSmallScreens'
            >
                <Icon name='mail' size='big'/>
            </Menu.Item>
            <Menu.Item
                onClick={() => window.open('https://www.linkedin.com/in/gitit-regev-aa6a4961/')}
                className='showContentOnlyOnSmallScreens'
            >
                <Icon name='linkedin' size='big'/>
            </Menu.Item>
            <Menu.Item
                onClick={() => window.open('https://github.com/gitit1?tab=repositories')}
                className='showContentOnlyOnSmallScreens'
            >
                <Icon name='github' size='big'/>
            </Menu.Item>
        </Sidebar>
    )
}

export default SidebarWrapper