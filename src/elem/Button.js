import React from "react";
import styled from "styled-components";

const Button = (props) => {
    const { children, _onClick, is_float, text, width, margin } = props;

    if (is_float) {
        return (
            <React.Fragment>
                <FloatButton onClick={_onClick}>{text ? text : children}</FloatButton>
            </React.Fragment>
        );
    }

    const styles = {
        width: width,
        margin: margin,
    };

    return (
        <React.Fragment>
            <ElButton {...styles} onClick={_onClick}>
                {text ? text : children}
            </ElButton>
        </React.Fragment>
    );
};

Button.defaultProps = {
    children: null,
    _onClick: () => {},
    is_float: false,
    text: false,
    width: "100%",
    margin: false,
};

const ElButton = styled.button`
    width: ${(props) => props.width};
    background-color: #0095f6;
    color: #ffffff;
    border-radius: 3px;
    box-sizing: border-box;
    border: none;
    padding: ${(props) => props.padding};
    ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
`;

const FloatButton = styled.button`
    width: 50px;
    height: 50px;
    background-color: #0095f6;
    color: #ffffff;
    box-sizing: border-box;
    font-size: 36px;
    font-weight: 800;
    position: fixed;
    bottom: 50px;
    right: 16px;
    text-align: center;
    vertical-align: middle;
    border: none;
    border-radius: 50px;
`;

export default Button;