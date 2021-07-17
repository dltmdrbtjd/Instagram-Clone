import React from 'react';
import styled from 'styled-components';

const Text = (props) => {
    const {cursor,_onClick,size,bold,color,margin, children } = props;

    const styles = {
        size: size,
        bold: bold,
        color: color,
        margin: margin,
        cursor: cursor,
    }

    return (
        <React.Fragment>
            <Textbox onClick={_onClick} {...styles}>{children}</Textbox>
        </React.Fragment>
    )
}

Text.defaultProps = {
    size: false,
    bold: false,
    margin: false,
    _onClick: () => {},
}

const Textbox = styled.p`
    ${(props) => (props.size ? `font-size:${(props.size)}`:"")};
    ${(props) => (props.bold ? `font-weight:600`:`font-weight:400`)};
    color: ${(props) => props.color};
    ${(props) => (props.margin ? `margin:${(props.margin)}`:"")};
    cursor: ${(props) => props.cursor};
`;

export default Text;