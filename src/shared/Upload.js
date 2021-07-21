import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { imageCreators } from '../modules/redux/image';

const Upload = (props) => {
    const dispatch = useDispatch();
    const fileInput = React.useRef();


    const selectFile = (e) => {
        const reader = new FileReader();
        const file = fileInput.current.files[0];
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            dispatch(imageCreators.setPreview(reader.result));
    };
};

    return (
        <React.Fragment>
        <input
            type="file"
            onChange={selectFile}
            ref={fileInput}
        />
        </React.Fragment>
    );
};

export default Upload;