import * as types from 'constants/ActionTypes';

export const test = (state = false, action) => {
  switch (action.type) {
    case types.TEST:
      return true;
    default:
      return state;
  }
};

export const lol = 'lol';
