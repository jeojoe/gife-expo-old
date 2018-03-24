import { SecureStore } from 'expo';

export function setToken(token) {
  return SecureStore.setItemAsync('@token', token);
}

export function getToken() {
  return SecureStore.getItemAsync('@token');
}

export function setInvitationCode(code) {
  return SecureStore.setItemAsync('@invitationCode', code);
}

export function getInvitationCode() {
  return SecureStore.getItemAsync('@invitationCode');
}
