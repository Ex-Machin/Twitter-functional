import React from "react"

import './post-add-form.css'

const PostAddForm = () => {
    return (
        <form action="" className="bottom-panel d-flex">
            <input 
                type="text"
                placeholder="what do you think about"
                className="form-control new-post-label" 
            />
            <button 
                type="submit"
                className="btn btn-outline-secondary">Add</button>
        </form>
    )
}

export default PostAddForm