import { SUBMIITED_FORM } from 'store/types';
import { IAction } from 'types';

const initialState = {};

function appReducer(state = initialState, action: IAction) {
  switch (action.type) {
    case SUBMIITED_FORM.FULLFILLED:
      return {
        ...state,
        formData: action.payload
      };
    default:
  }
  return state;
}

export default appReducer;
