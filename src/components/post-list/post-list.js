import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';

const PostList = ({posts}) => {

    const elements = posts.map((item) => {
    return (
        <li key = {item.id} className = "list-group-item">
        <PostListItem {...item}                  // spread operator
        // lable = {item.lable}                 //варіант 2 як отримати дані з серверу
        // important = {item.important}
        />
        </li>
    )
    });

    return(
        <ul className = "app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;