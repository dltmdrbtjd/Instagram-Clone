import React from 'react';
import styled from "styled-components";

const Image = (props) => {
    const {paddingbot,shape,src,size,_onClick} = props

    const styles = {
        src: src,
        size: size,
        paddingbot: paddingbot,
    }

    if(shape === "circle"){
        return (
            <ImageCircle onClick={_onClick} {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle"){
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }

    return (
        <React.Fragment>
            <ImageDefault {...styles}></ImageDefault>
        </React.Fragment>
    )
}

Image.defaultProps = {
    shape: "circle",
    src: "",
    size: 36,
    _onClick: () => {},
    cursor: null,
    paddingbot: "108.5%"
}

const ImageDefault = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position: center;
`;

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-bottom: ${(props) => props.paddingbot};
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position: center;
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);
    background-image: url("${(props) => props.src}");
    background-size: cover;
    background-position: center;
    margin-right: 10px;
    cursor: pointer;
    z-index: 2;
    position: relative;
`;


export default Image;