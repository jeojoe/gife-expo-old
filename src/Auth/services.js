import { SecureStore } from 'expo';

export function setToken(token) {
  return SecureStore.setItemAsync('token', token);
}

export function getToken() {
  return SecureStore.getItemAsync('token');
}

export function deleteToken() {
  return SecureStore.deleteItemAsync('token');
}

export function setInvitationCode(code) {
  return SecureStore.setItemAsync('invitationCode', code);
}

export function getInvitationCode() {
  return SecureStore.getItemAsync('invitationCode');
}

export function deleteInvitationCode() {
  return SecureStore.deleteItemAsync('invitationCode');
}
