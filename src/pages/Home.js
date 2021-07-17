import React from 'react';

import styled from 'styled-components';

import Header from '../components/Header';
import Board from '../components/Board';

const Home = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Section>
                <Board />
            </Section>
        </React.Fragment>
    )
}

const Section = styled.section`
    max-width: 600px;
    margin: 0 auto;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 54px;
    transform: translateX(-50%);
`;

export default Home;
