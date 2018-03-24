import * as types from 'constants/ActionTypes';
import * as Services from './services';

export const lol = 0;

export function setIsLoggedIn(isLoggedIn) {
  return {
    type: types.SET_IS_LOGGEDIN,
    isLoggedIn,
  };
}

export function setInvitationCode(invitationCode) {
  return async (dispatch) => {
    try {
      await Services.setInvitationCode(invitationCode);
      dispatch({
        type: types.SET_INVITATION_CODE,
        invitationCode,
      });
    } catch (err) {
      console.log(err);
    }
  };
}
