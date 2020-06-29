import React from 'react';
import './post-add-form.css';

const PostAddForm = ({onAdd}) => {
    return (
        <div className = "bottom-panel d-flex">
            <input
            type = "text"
            placeholder = "Відгук"
            className = "form-control new-post-lable"
            />
            <button
            className = "btn btn-outline-secondary"
            type = "submit"
            onClick = {() => onAdd("Hello!")}>
            Добавити
            </button>
        </div>
    )
}

export default PostAddForm;