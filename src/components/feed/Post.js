import { Avatar } from '@mui/material';

import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import PublishOutlinedIcon from '@mui/icons-material/PublishOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

import React from 'react';
import './Post.css';

function Post({ displayName, username, verified, text, image, avatar }) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src={avatar} />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            {displayName}{' '}
                            <span className="post__headerSpecial">
                                {verified && (
                                    <VerifiedUserIcon className="post__badge" />
                                )}{' '}
                                @{username}
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>
                </div>
                <img src={image} alt="" />
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatOutlinedIcon fontSize="small" />
                    <FavoriteBorderOutlinedIcon fontSize="small" />
                    <PublishOutlinedIcon fontSize="small" />
                </div>
            </div>
        </div>
    );
}

export default Post;
