import { ActionTypes } from 'Global/constants';

export function setDoChallengeModalVisible(isDoChallengeModalVisible) {
  return {
    type: ActionTypes.SET_DO_CHALLENGE_MODAL_VISIBLE,
    isDoChallengeModalVisible,
  };
}

export const lol = 'lol';
