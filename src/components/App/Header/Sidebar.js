import React from 'react'
import { useNavigate } from "react-router-dom";
import { Menu, Sidebar,} from 'semantic-ui-react'

const SidebarWrapper = ({ isOpen, setIsOpen }) => {
    const navigate = useNavigate();

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
            <Menu.Item onClick={() => navigate(`/home`)}>Home</Menu.Item>
            <Menu.Item onClick={() => navigate(`/resume`)}>Resume</Menu.Item>
            <Menu.Item onClick={() => navigate(`/projects`)}>Projects</Menu.Item>
        </Sidebar>
    )
}

export default SidebarWrapper