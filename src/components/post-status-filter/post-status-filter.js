import React from 'react';
//import { Button } from 'reactstrap';
import './post-status-filter.css';


const PostStatusFilter = () => {
    return (
        <div className = "btn-group">
            {/* <Button outline color="info">info</Button>  з reactstrap*/}  
            <button type = "button" className = "btn btn-info">Все</button>
            <button type = "button" className = "btn btn-secondary">Сподобалося</button>
        </div>
    )
}

export default PostStatusFilter;