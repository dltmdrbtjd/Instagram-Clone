import React from 'react';

import styled from 'styled-components';

import Header from '../components/Header';

const Home = (props) => {
    return (
        <React.Fragment>
                <Background>
                    <Header />
                </Background>
        </React.Fragment>
    )
}

const Background = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f7f7f7;
    position: relative;
    top: 54px;
`;

export default Home;
