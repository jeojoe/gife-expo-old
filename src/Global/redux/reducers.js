import { ActionTypes } from 'Global/constants';

export const lol = 'lol';

export const isLoading = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.SET_IS_LOADING: {
      return action.isLoading;
    }
    default: {
      return state;
    }
  }
};
