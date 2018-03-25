import request from 'superagent';
import { Config } from 'Global/constants';

function genEndpoint(url) {
  return `${Config.API_URL}/${url}`;
}

export function mock() {
  return request
    .get('http://www.mocky.io/v2/5a996cbf2e0000e331553680');
}

export function get(url) {
  return request
    .get(genEndpoint(url));
}

export function post(url, body) {
  return request
    .post(genEndpoint(url))
    .send(body);
}
