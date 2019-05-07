const isProd = process.env.NODE_ENV === 'production'

if (!isProd && !process.env.REACT_APP_DHIS2_BASE_URL) {
  throw new Error(
    "The environment variable REACT_APP_DHIS2_BASE_URL must be set when the application is built in development mode."
  );
}

const url = isProd ? '..' : process.env.REACT_APP_DHIS2_BASE_URL;
const endpoint = `${url}/api`;
const defaultConfig = {
  method: 'GET',
  credentials: 'include',
}

function getPath(path = '') {
    return !path ? endpoint : `${endpoint}/${path}`
}

export function get(path, config = defaultConfig) {
    return fetch(getPath(path), config)
}
