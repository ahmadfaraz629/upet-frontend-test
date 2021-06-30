import { SET_REDUX_KEY} from 'store/types';
import { IAction } from 'types';

const initialState = {
};

function userReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case SET_REDUX_KEY:
      return {
        ...state,
        [action.payload.key]: action.payload.value
      };
    default:
  }
  return state;
}

export default userReducer;
