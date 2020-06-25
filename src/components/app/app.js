import React from 'react';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';

const App = () => {
    return (
        <div>
            <AppHeader className = "app" />
            <div className = "search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList/>
        </div>
    )
}

export default App;