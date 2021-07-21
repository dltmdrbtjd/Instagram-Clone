import React from "react";
import styled from 'styled-components';
import { Text } from '../elem/index';

const Footer = () => {
    return (
        <Container>
                <InnerContainer>
                    <nav>
                        <ul>
                            <li>
                                <Text cursor="pointer">소개</Text>
                            </li>
                            <li>
                                <Text cursor="pointer">블로그</Text>
                            </li>
                            <li>
                                <Text cursor="pointer">도움말</Text>
                            </li>
                            <li>
                                <Text cursor="pointer">Api</Text>
                            </li>
                            <li>
                                <Text cursor="pointer">개인정보처리방침</Text>
                            </li>
                            <li>
                                <Text cursor="pointer">약관</Text>
                            </li>
                        </ul>
                    </nav>
                </InnerContainer>
                <OuterContainer>
                    <nav>
                        <div>
                            <Text cursor="pointer">© 2021 Instagram from 22_Insta_Clone</Text>
                        </div>
                    </nav>
                </OuterContainer>
            </Container>
    );
}

const Container = styled.div`
    max-width: 350px;
    margin: 0 auto;
    width: 100%;
    position: absolute;
    left: 50%;
    top: 800px;
    transform: translateX(-50%);
`;

const InnerContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 13px;
    line-height: 14px;
    margin-top: 15px;
    color : #8E8E8E;

    & > nav > ul {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }

    & > nav > ul > li {
        margin-right: 16px;
    }

`;

const OuterContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    text-transform: uppercase;
    font-weight: 400;
    font-size: 13px;
    line-height: 14px;
    margin-top: 15px;
    color : #8E8E8E;

    & > nav {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
    }
`;

export default Footer; 

