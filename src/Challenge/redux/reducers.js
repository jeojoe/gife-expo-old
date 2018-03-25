import { ActionTypes } from 'Global/constants';

export const isDoChallengeModalVisible = (store = false, action) => {
  switch (action.type) {
    case ActionTypes.SET_DO_CHALLENGE_MODAL_VISIBLE: {
      return action.isDoChallengeModalVisible;
    }
    default: {
      return store;
    }
  }
};

export const lol = 'lol';
