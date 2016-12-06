import {SET_LYRICS} from '../constants';

const DEFAULT_STATE = {
  lyric: ''
};

function reducer (currentState = DEFAULT_STATE, action) {
  switch (action.type) {
    case SET_LYRICS:
      return Object.assign({}, currentState, {
        lyric: action.lyric
      });
    default: return currentState;
  }
}

export default reducer;
