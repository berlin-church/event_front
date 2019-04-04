import 'whatwg-fetch';

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  return response.json();
}

/**
 * Parses the XML returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed XML from the request
 */
function parseXml(response) {
  return response
    .text()
    .then(str => new DOMParser().parseFromString(str, 'application/xml'));
}

/**
 * Parses the text returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed text from the request
 */
function parseText(response) {
  return response.text();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return { response };
  }
  const error = new Error(response.statusText);
  error.response = response;
  return { error };
}

const codesWithoutBody = [204, 401];

function hasNoBody(response) {
  return codesWithoutBody.includes(response.status);
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @param  {string} contentType The content type of response header
 *
 * @return {object}           The response data
 */
/* eslint-disable */
export default function request(url, params = {}, contentType, xmlResult) {
  let error = null;
  return fetch(url, params)
    .then(checkStatus)
    .then((result) => {
      error = result.error;
      if (error) {
        if (hasNoBody(error.response)) {
          return;
        }
        return parseJSON(error.response);
      }
      return result.response;
    })
    .then((response) => {
      if (error) {
        error.body = response;
        throw error;
      }
      if (hasNoBody(response)) {
        return;
      }
      if (xmlResult) {
        return parseXml(response);
      }
      if (contentType === 'text/plain') {
        return parseText(response);
      }
      if (contentType && contentType !== 'text/json') {
        return response;
      }
      return parseJSON(response);
    });
}
/* eslint-enable */

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [object]  The object we want to pass into the body to "fetch"
 *
 * @return {object}           The response data
 */
export function postRequest(url, object) {
  return request(url, getOptions('POST', object));
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [object]  The object we want to pass into the body to "fetch"
 *
 * @return {object}           The response data
 */
export function putRequest(url, object) {
  return request(url, getOptions('PUT', object));
}

function getOptions(method, object) {
  return {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(object),
    method,
  };
}
