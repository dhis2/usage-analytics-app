const defaultConfig = {
    method: 'GET',
    credentials: 'include',
}

export function get(baseUrl, path, config = defaultConfig) {
    if (!baseUrl) {
        return Promise.reject(new Error('A baseUrl must be passed'))
    }

    if (!path) {
        return Promise.reject(new Error('A path must be passed'))
    }

    return fetch(`${baseUrl}/api/${path}`, config).then(response => {
        if (response.ok) {
            return response
        }

        throw new Error(response.statusText)
    })
}

export function getJSON(baseUrl, path) {
    return get(baseUrl, path)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ERROR') {
                throw new Error(data.message)
            } else {
                return data
            }
        })
}
