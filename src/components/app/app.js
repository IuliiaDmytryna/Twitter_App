import React from 'react';
import AppHeader from '../app-header';
import styled from 'styled-components';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';
//import './app.css';

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const AppBlock2 = styled(AppBlock)`
    background-color: grey;
`

const App = () => {

    const data = [
        {lable: "Going to learn React", important: true},
        {lable: "That is so good!", important: false},
        {lable: "I need a break...", important: false}
    ];

    return (
        <AppBlock2>
            <AppHeader/>
            <div className = "search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList posts={data}/>
            <PostAddForm/>
        </AppBlock2>
    )
}

export default App;