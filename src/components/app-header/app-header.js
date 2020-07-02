import React from 'react';
import styled from 'styled-components';
import './app-header.css';

const Header = styled.div`
  align-items: flex-end;
  justify-content: space-between;
  display: flex;
  h1 {
    font-size: 26px;
    color: ${props => props.colored ? 'red' : 'black'};
    :hover{
        color: green;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: grey;
  }
`

const AppHeader = ({liked, allPosts}) => {
    return (
        <Header colored>
            <h1>Iuliia Dmytryna</h1>
          <h2>{allPosts} записів, з них подобалося - {liked}</h2>
        </Header>
    )
}
export default AppHeader;