import React from "react"

import PostListItem from '../post-list-item/post-list-item'
import {ListGroup} from 'reactstrap'

import './post-list.css'

const PostList = ({posts, onDelete, onToggleImportant, onToggleLiked}) => {

    const elements = posts.map(post => {
            const {id, ...itemProps} = post
            return (
                <li key={id} className="list-group-item">
                    <PostListItem 
                    {...itemProps}
                    onDelete={() => onDelete(id)}
                    onToggleImportant={() => onToggleImportant(id)}
                    onToggleLiked={() => onToggleLiked(id)}
                        // label={post.label}  - old version(the same as above)
                        // important={post.important}
                        />
                </li>
            )
    })

    return (
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;