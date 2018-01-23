import { CODER_LOADED_LIST, CODER_LOADED_INFO, CODER_LOADED_SUBMIT } from '../actions/types';

export default function coders(state = [], action = {}) {
  switch (action.type) {
  	case CODER_LOADED_LIST:
      return action.coders;

    default:
      return state;

  }
}

export function coder(state = {}, action = {}) {
  switch(action.type) {
    case CODER_LOADED_INFO:
    case CODER_LOADED_SUBMIT:
      return action.coder;

    default:
      return state;
  }
}