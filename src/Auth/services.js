import { SecureStore } from 'expo';
import { API } from 'Global/libs';

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

export function verifyInvitationCode(code) {
  return API.get(`api/auth/invitation?code=${code}`);
}

export async function loginOAuth(accessToken) {
  const response = await fetch(`https://graph.facebook.com/me?access_token=${accessToken}`);
  const { id: uid, email } = await response.json();

  return API.post('api/auth/facebook', {
    accessToken, uid, email,
  });
}
