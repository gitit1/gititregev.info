import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom'
import SidebarWrapper from './Sidebar';
import { Icon } from 'semantic-ui-react';
// import { useSpring, animated } from 'react-spring';

function Header() {
    const location = useLocation();
    const [startingY, setStartingY] = useState(0);
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    // const [styles, api] = useSpring(() => ({
    //     from: { y: 0 },
    //     to: { y: 8 },
    // }));

    // useEffect(() => {
    //     api.start({ y: 8 });

    // },[]);

    // useEffect(() => {
    //     api.start({ y: startingY });
    //     setStartingY(startingY === 0 ? 8 : 0);
    // }, [location.pathname]);

    return (
        <div className='header'>
            {/* <animated.div  style={styles} className='logo'>
                <h1>Gitit Regev</h1>
            </animated.div> */}
            <div className='logo'>
                <h1>Gitit Regev</h1>
            </div>
            <div className='icons'>
                <a className="email" href="mailto:gititregev1@gmail.com">
                    <Icon name='mail' size='big' />
                </a>
                <a className="linkedin" href="https://www.linkedin.com/in/gitit-regev-aa6a4961/">
                    <Icon name='linkedin' size='big' />
                </a>
                <a className="github" href="https://github.com/gitit1?tab=repositories">
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