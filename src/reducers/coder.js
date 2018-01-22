import { CODER_LOADED_LIST, CODER_LOADED_INFO } from '../actions/types';

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
      return action.coder;

    default:
      return state;
  }
}