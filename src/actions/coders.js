import { CODER_LOADED_LIST, CODER_LOADED_INFO } from './types';
import api from './api';

export const codeListLoaded = (coders) => ({
	type: CODER_LOADED_LIST,
	coders
});

export const coderInfoLoaded = (coder) => ({
	type: CODER_LOADED_INFO,
	coder
});

export const loadCoderList = () => (dispatch) => 
	api.coder.loadCoderList().then(codersList => {
		dispatch(codeListLoaded(codersList));
	});

export const loadCoderInfo = (data) => (dispatch) => 
	api.coder.loadCoderInfo(data).then(coderInfo => {
		dispatch(coderInfoLoaded(coderInfo))
	})
