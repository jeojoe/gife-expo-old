import { ActionTypes } from 'app-constants';

export const test = (state = false, action) => {
  switch (action.type) {
    case ActionTypes.TEST:
      return true;
    default:
      return state;
  }
};

export const lol = 'lol';
