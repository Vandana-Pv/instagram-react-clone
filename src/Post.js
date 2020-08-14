import React from 'react'
import './Post.css'
import Avatar from '@material-ui/core/Avatar'

function Post({username, caption, imageUrl}) {
    return (
        <div className="post">

            {/* header -> avatar + username */}
            <div className="post__header">
                <Avatar
                    className="post__avatar"
                    alt= "Vandana"
                    src= "/static/images/avatar/1.jpg"/>
                <h3>{username}</h3>
            </div>

            {/* image */}
            <img 
                className = "post__image" 
                src={imageUrl}
                alt= ""
            />
            
            {/* username + caption */}
            <h4 className="post__text"><b>{username}</b> {caption}</h4>
        </div>
    )
}

export default Post