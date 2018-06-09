/**
 * Created by Murat on 07.06.2018.
 */
import jquery from 'jquery'

// const API = 'https://quiet-island-38343.herokuapp.com/api/';
const API = 'http://127.0.0.1:5000/api/';

export function createUser (onSuccess, onError, uid) {
  const settings = {
    async: true,
    crossDomain: true,
    url: `${API}uid/create`,
    method: 'POST',
    data: {
      uid
    },
    headers: {
      accept: 'application/json'
    }
  };

  jquery.ajax(settings)
    .done(response => onSuccess(response))
    .fail(error => onError(error.status))
}

export function loadUser (onSuccess, onError, uid) {
  const settings = {
    async: true,
    crossDomain: true,
    url: `${API}uid/load`,
    method: 'POST',
    data: {
      uid
    },
    headers: {
      accept: 'application/json'
    }
  };

  jquery.ajax(settings)
    .done(response => onSuccess(response))
    .fail(error => onError(error.status))
}

export function updateUser (onSuccess, onError, data) {
  const settings = {
    async: true,
    crossDomain: true,
    url: `${API}uid/update`,
    method: 'POST',
    data,
    headers: {
      accept: 'application/json'
    }
  };

  jquery.ajax(settings)
    .done(response => onSuccess(response))
    .fail(error => onError(error.status))
}
