if (!process.env.REACT_APP_DHIS2_BASE_URL) {
  throw new Error('The environment variable REACT_APP_DHIS2_BASE_URL must be set');
}

const url = process.env.REACT_APP_DHIS2_BASE_URL;
const endpoint = `${url}/api`;
const defaultConfig = {
  method: 'GET',
  credentials: 'include',
}

export function get(path, config = defaultConfig) {
  if (!path) {
    return Promise.reject(new Error('A path must be passed'));
  }

  return fetch(`${endpoint}/${path}`, config)
    .then(response => {
      if (response.ok) {
        return response;
      }
    
      throw new Error(response.statusText)
    })
}

export function getJSON(path) {
  return get(path)
    .then(response => response.json())
    .then(data => {
      if (data.status === 'ERROR') {
        throw new Error(data.message)
      } else {
        return data
      }
    })
}
