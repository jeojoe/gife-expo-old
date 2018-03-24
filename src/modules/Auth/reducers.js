import * as types from 'constants/ActionTypes';

export const test = 'test';

export const isLoggedIn = (state = false, action) => {
  switch (action.type) {
    case types.SET_IS_LOGGEDIN: {
      return action.isLoggedIn;
    }
    default: {
      return state;
    }
  }
};

export const invitationCode = (state = null, action) => {
  switch (action.type) {
    case types.SET_INVITATION_CODE: {
      return action.invitationCode;
    }
    default: {
      return state;
    }
  }
};
