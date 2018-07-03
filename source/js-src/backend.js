/**
 * Created by Murat on 07.06.2018.
 */
import jquery from 'jquery'

// const API = 'https://quiet-island-38343.herokuapp.com/api/';
const API = 'http://127.0.0.1:5000/api/';

export function createHero (onSuccess, onError, uid) {
  const settings = {
    async: true,
    crossDomain: true,
    url: `${API}create`,
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

export function loadHero (onSuccess, onError, uid) {
  const settings = {
    async: true,
    crossDomain: true,
    url: `${API}load`,
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

export function moveHero (onSuccess, onError, data) {
  const json = JSON.stringify(data);
  const settings = {
    async: true,
    crossDomain: true,
    url: `${API}move`,
    method: 'POST',
    data: {
      json
    },
    headers: {
      accept: 'application/json'
    }
  };

  jquery.ajax(settings)
    .done(response => onSuccess(response))
    .fail(error => onError(error.status))
}

export function updateHero (onSuccess, onError, data) {
  const json = JSON.stringify(data);
  const settings = {
    async: true,
    crossDomain: true,
    url: `${API}update`,
    method: 'POST',
    data: {
      json
    },
    headers: {
      accept: 'application/json'
    }
  };

  jquery.ajax(settings)
    .done(response => onSuccess(response))
    .fail(error => onError(error.status))
}
