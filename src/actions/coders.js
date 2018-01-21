import { CODER_LOADED_LIST } from './types';
import api from './api';

export const CodeListLoaded = (coders) => ({
	type: CODER_LOADED_LIST,
	coders
});

export const loadCoderList = () => (dispatch) => 
	api.coder.loadCoderList().then(codersList => {
		dispatch(CodeListLoaded(codersList));
	});
