import React from 'react';
import styled from 'styled-components';

const Grid = (props) => {
    const { 
        maxHeight,
        overflow,
        display,
        jContent,
        bordertop,
        borderbot,
        cover,
        pc,
        bgColor,
        index, 
        left,
        top,
        radius, 
        height, 
        position, 
        children, 
        width, 
        padding, 
        margin, 
        center, 
        is_flex, 
        border, 
        cursor, 
        _onClick,
        maxWidth, 
        bg} = props;


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
        borderbot: borderbot,
        bordertop: bordertop,
        overflow: overflow,
        jContent: jContent,
        display: display,
        maxHeight: maxHeight,
        maxWidth: maxWidth,
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
    is_flex: false,
    _onClick: () => {},
}

const GridBox = styled.div`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    max-height: ${(props) => props.maxHeight};
    max-width: ${(props) => props.maxWidth};
    box-sizing: border-box;
    padding: ${(props) => props.padding};
    margin: ${(props) => props.margin};
    text-align: ${(props) => props.center};
    ${(props) => (props.is_flex ? `display: flex; align-items: center; justify-content: space-between`: "")};
    border: ${(props) => props.border};
    border-bottom: ${(props) => props.borderbot};
    border-top: ${(props) => props.bordertop};
    border-radius: ${(props) => props.radius};
    background: url(${(props) => props.bg});
    position: ${(props) => props.position};
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    background-size: ${(props) => props.cover};
    background-position: ${(props) => props.position};
    z-index: ${(props) => props.index};
    background-color: ${(props) => props.bgColor};
    cursor: ${(props) => props.cursor};
    overflow: ${(props) => (props.overflow)};
    display: ${(props) => props.display};
    justify-content: ${(props) => props.jContent};
`;

export default Grid;