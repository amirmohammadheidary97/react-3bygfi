import * as actions from './actions';
import { initialState } from './initialState';

export function counterReducer(state, action) {
  switch (action.type) {
    case actions.INCREMENT:
      return { count: state.count + 1 };
    case actions.DECREMENT:
      return { count: state.count - 1 };
    case actions.RESET:
      return { count: initialState.count };
    default:
      return { count: 0 };
  }
}
