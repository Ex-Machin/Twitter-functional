import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTrash, faHeart } from '@fortawesome/free-solid-svg-icons'

import './post-list-item.css'

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
        <span className="app-list-item-label">
            Hello World
        </span>
        <div className="d-flex justify-content-center align-items-center">
            <button className="btn-star btn-sm" type="submit">
                <FontAwesomeIcon icon={faStar} />
            </button>
            <button className="btn-trash btn-sm" type="submit">
                <FontAwesomeIcon icon={faTrash} />
            </button>
                <FontAwesomeIcon icon={faHeart} />
        </div>
    </li>
    )
}

export default PostListItem