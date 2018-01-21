import { CODER_LOADED_LIST } from '../actions/types';

export default function coder(state = [], action = {}) {
  switch (action.type) {
  	case CODER_LOADED_LIST:
  		return action.coders

    default:
      return state;

  }
}