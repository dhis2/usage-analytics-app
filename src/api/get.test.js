import { get, getJSON } from './get'

window.fetch = jest.fn()

describe('get', () => {
    it('rejects with the expected error message if path is not specified', () => {
        return expect(get()).rejects.toMatchSnapshot()
    })

    it('calls fetch with the expected path', () => {
        const actual = 'path'
        const expected = {
            ok: true,
            path: `${process.env.REACT_APP_DHIS2_BASE_URL}/api/${actual}`,
        }
        window.fetch.mockImplementationOnce(path =>
            Promise.resolve({ ok: true, path })
        )

        return expect(get('path')).resolves.toEqual(expected)
    })

    it('allows the config to be overridden', () => {
        window.fetch.mockImplementationOnce((path, config) =>
            Promise.resolve({ ok: true, config })
        )
        const actual = 'config'
        const expected = {
            ok: true,
            config: actual,
        }

        return expect(get('path', actual)).resolves.toEqual(expected)
    })

    it('rejects with the expected error message if fetch resolves but the response is not ok', () => {
        window.fetch.mockImplementationOnce(() =>
            Promise.resolve({ statusText: 'The response is not ok' })
        )

        return expect(get('path')).rejects.toMatchSnapshot()
    })
})

describe('getJSON', () => {
    it('returns the data when everything is ok', () => {
        const expected = 'data'
        const response = {
            ok: true,
            json: () => expected,
        }
        window.fetch.mockImplementationOnce(() => Promise.resolve(response))

        return expect(getJSON('path')).resolves.toEqual(expected)
    })

    it('rejects with the expected error message if the json is not ok', () => {
        const expected = 'The JSON is not ok'
        const response = {
            ok: true,
            json: () => ({ status: 'ERROR', message: expected }),
        }
        window.fetch.mockImplementationOnce(() => Promise.resolve(response))

        return expect(getJSON('path')).rejects.toMatchSnapshot()
    })
})
