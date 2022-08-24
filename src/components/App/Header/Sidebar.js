import React from 'react'
import {
    Checkbox,
    Grid,
    Header,
    Icon,
    Image,
    Menu,
    Segment,
    Sidebar,
} from 'semantic-ui-react'

const SidebarWrapper = ({isOpen, setIsOpen}) => {
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
            <Menu.Item as='a'>
                <Icon name='home' />
                Home
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='gamepad' />
                Games
            </Menu.Item>
            <Menu.Item as='a'>
                <Icon name='camera' />
                Channels
            </Menu.Item>
        </Sidebar>
    )
}

export default SidebarWrapper