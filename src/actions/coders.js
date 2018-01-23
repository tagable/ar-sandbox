import { CODER_LOADED_LIST, CODER_LOADED_INFO, CODER_LOADED_SUBMIT } from './types';
import api from './api';

export const codeListLoaded = (coders) => ({
	type: CODER_LOADED_LIST,
	coders
});

export const coderInfoLoaded = (coder) => ({
	type: CODER_LOADED_INFO,
	coder
});

export const coderSubmitLoaded = (coder) => ({
	type: CODER_LOADED_SUBMIT,
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

export const submitCode = (data) => (dispatch) => 
	api.coder.submitCode(data).then(code => {
		dispatch(coderInfoLoaded(code))
	})
