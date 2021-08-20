import React from "react"

const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
        <span className="app-list-item-label">
            Hello World
        </span>
        <div className="d-flex justify-content-center align-items-center">
            <button className="btn-star btn-sm">
                <i className="fas fa-star"></i>
            </button>
            <button className="btn-trash btn-sm">
                <i className="fas fa-trash-o"></i>
            </button>
            <i className="fas fa-camera"></i>
        </div>
    </li>
    )
}

export default PostListItem