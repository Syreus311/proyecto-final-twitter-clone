import React from 'react';
import SidebarOption from './SidebarOption';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Button from '@mui/material/Button';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* Twitter logo */}
            <TwitterIcon className="sidebar__twitterIcon" />

            {/* SidebarOption components */}
            <SidebarOption Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={NotificationsIcon} text="Notifications" />
            <SidebarOption Icon={AccountCircleIcon} text="Profile" />

            {/* Tweet button */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>
                Tweet
            </Button>
        </div>
    );
}

export default Sidebar;
