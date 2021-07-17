import React from 'react';

import { useSelector } from 'react-redux';

const BoardDetail = (props) => {
    const board_list = useSelector((state) => state.board.list);
    let board_index = parseInt(props.match.params.index);
    console.log(board_list)
    console.log(board_index)

    return (
        <React.Fragment>
            <div>시바!!!!!</div>
        </React.Fragment>
    )
}

export default BoardDetail;