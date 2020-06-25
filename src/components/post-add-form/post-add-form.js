import React from 'react';
import './post-add-form.css';

const PostAddForm = () => {
    return (
        <form className = "bottom-panel d-flex">
            <input
            type = "text"
            placeholder = "Відгук"
            className = "form-control new-post-lable"
            />
            <button
            className = "btn btn-outline-secondary"
            type = "submit">
            Добавити
            </button>
        </form>
    )
}

export default PostAddForm;