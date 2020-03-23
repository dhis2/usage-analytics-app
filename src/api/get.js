const defaultConfig = {
    method: 'GET',
    credentials: 'include',
}

export function get(path, context, config = defaultConfig) {
    if (!path) {
        return Promise.reject(new Error('A path must be passed'))
    }

    return fetch(`${context.baseUrl}/api/${path}`, config).then(response => {
        if (response.ok) {
            return response
        }

        throw new Error(response.statusText)
    })
}

export function getJSON(path, context) {
    return get(path, context)
        .then(response => response.json())
        .then(data => {
            if (data.status === 'ERROR') {
                throw new Error(data.message)
            } else {
                return data
            }
        })
}
