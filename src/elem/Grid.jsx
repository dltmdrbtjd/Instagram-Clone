import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
    const {children, width, padding, margin, center, is_flex, border, cursor, _onClick, bg} = props;

    const styles = {
        width: width,
        padding: padding,
        margin: margin,
        center: center,
        is_flex: is_flex,
        border: border,
        cursor: cursor,
        bg: bg,
    }

    return (
        <React.Fragment>
            <GridBox onClick={_onClick} {...styles}>{children}</GridBox>
        </React.Fragment>
    )
}

Grid.defaultProps = {
    children: null,
    width: "100%",
    padding: false,
    margin: false,
    center: false,
    is_flex: false,
    border: false,
    cursor: false,
    bg: false,
    _onClick: () => {},
}

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: 100%;
    box-sizing: border-box;
    ${(props) => (props.padding ? `padding:${(props.padding)}`: "")};
    ${(props) => (props.margin ? `margin:${(props.margin)}`:"")};
    ${(props) => (props.center ? `text-align: center`: "")};
    ${(props) => (props.is_flex ? `display: flex; align-items: center; justify-content: space-between`: "")};
    ${(props) => (props.border ? `border:${(props.border)}`: "")};
    ${(props) => (props.cursor ? `cursor:pointer`:"")};
    ${(props) => (props.bg ? `background: url(${(props.bg)})`:"")};
`;

export default Grid;