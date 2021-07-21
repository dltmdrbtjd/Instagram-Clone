import { createAction, handleActions } from 'redux-actions';
import produce from 'immer';

const UPLOAD = 'image/UPLOAD';
const PREVIEW = 'image/PREVIEW';


const uploadImage = createAction(UPLOAD, (imageUrl) => ({ imageUrl }));
const setPreview = createAction(PREVIEW, (preview) => ({ preview }));


const initialState = {
	imageUrl: null,
	preview: null,
};

export default handleActions(
	{
		[UPLOAD]: (state, action) =>
			produce(state, (draft) => {
				draft.imageUrl = action.payload.imageUrl;
			}),
		[PREVIEW]: (state, action) =>
			produce(state, (draft) => {
				draft.preview = action.payload.preview;
			}),
	},
	initialState,
);

const imageCreators = {
    uploadImage,
    setPreview,
};

export { imageCreators };