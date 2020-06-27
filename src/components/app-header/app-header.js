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

const AppHeader = () => {
    return (
        <Header colored>
            <h1>Iuliia Dmytryna</h1>
            <h2>5 записів, з них подобалося - 0</h2>
        </Header>
    )
}
export default AppHeader;