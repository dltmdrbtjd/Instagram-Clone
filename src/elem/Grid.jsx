import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
    const { cover,pc,bgColor,index, left,top,radius, height, position, children, width, padding, margin, center, is_flex, border, cursor, _onClick, bg} = props;

    const styles = {
        width: width,
        padding: padding,
        margin: margin,
        center: center,
        is_flex: is_flex,
        border: border,
        cursor: cursor,
        bg: bg,
        position: position,
        height: height,
        radius: radius,
        left: left,
        top: top,
        index: index,
        pc: pc,
        bgColor: bgColor,
        cover: cover,
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
    height: "100%",
    padding: false,
    margin: false,
    center: false,
    is_flex: false,
    border: false,
    cursor: false,
    bg: false,
    position: false,
    radius: false,
    left: false,
    top: false,
    index: false,
    cover: false,
    pc: false,
    bgColor: false,
    _onClick: () => {},
}

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    box-sizing: border-box;
    ${(props) => (props.padding ? `padding:${(props.padding)}`: "")};
    ${(props) => (props.margin ? `margin:${(props.margin)}`:"")};
    ${(props) => (props.center ? `text-align: center`: "")};
    ${(props) => (props.is_flex ? `display: flex; align-items: center; justify-content: space-between`: "")};
    ${(props) => (props.border ? `border:${(props.border)}`: "")};
    ${(props) => (props.radius ? `border-radius:${(props.radius)}`: "")};
    ${(props) => (props.cursor ? `cursor:pointer`:"")};
    ${(props) => (props.bg ? `background: url(${(props.bg)})`:"")};
    ${(props) => (props.position ? `position: ${(props.position)}`: "")};
    ${(props) => (props.left ? `left:${props.left}`:"")};
    ${(props) => (props.top ? `top:${props.top}`:"")};
    ${(props) => (props.cover ? `background-size: cover`:"")};
    ${(props) => (props.pc ? `background-position: center`:"")};
    ${(props) => (props.index ? `z-index:${props.index}`:"")};
    ${(props) => (props.bgColor ? `background-color: #ffffff`:"")};
`;

export default Grid;