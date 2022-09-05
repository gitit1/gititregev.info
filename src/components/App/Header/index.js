import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import SidebarWrapper from './Sidebar';
import { Icon } from 'semantic-ui-react';

function Header() {
    const navigate = useNavigate();

    const [isSideBarOpen, setIsSideBarOpen] = useState(false);

    return (
        <div className='header'>
            <div className='logo'>
                <div onClick={() => navigate(`/home`)}>Gitit Regev</div>
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
                <Icon name='bars' size='big' onClick={() => setIsSideBarOpen(!isSideBarOpen)} />
                <SidebarWrapper isOpen={isSideBarOpen} setIsOpen={(toggle) => setIsSideBarOpen(toggle)} />
            </div>
        </div>
    )
}

export default Header;