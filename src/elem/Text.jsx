import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
    const {size,bold,color,margin, children } = props;

    const styles = {
        size: size,
        bold: bold,
        color: color,
        margin: margin,
    }

    return (
        <React.Fragment>
            <Textbox {...styles}>{children}</Textbox>
        </React.Fragment>
    )
}

Text.defaultProps = {
    size: false,
    bold: false,
    color: false,
    margin: false,
}

const Textbox = styled.p`
    ${(props) => (props.size ? `font-size:${(props.size)}`:"")};
    ${(props) => (props.bold ? `font-weight:600`:`font-weight:400`)};
    ${(props) => (props.color ? `color:${(props.color)}`:"")};
    ${(props) => (props.margin ? `margin:${(props.margin)}`:"")};
`;

export default Text;