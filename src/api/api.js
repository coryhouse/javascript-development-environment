import getBaseUrl from './baseUrl';

const baseUrl = getBaseUrl();

export function getCalculations() {
  return get('calculations');
}

function get(url) {
  return fetch(baseUrl + url).then(onSuccess, onError);
}

function onSuccess(response) {
  return response.json();
}

function onError(error) {
  console.log(error);
}
