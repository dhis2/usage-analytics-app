import * as locale from '../utils/locale'
import * as get from './get'
import {
    initApp,
    getUsageData,
    getFavorites,
    getDataStatistics,
    getUserLocale,
} from './index'
import { TOP_FAVORITES } from '../constants/categories'

beforeAll(() => {
    locale.setLocale = jest.fn()
    get.getJSON = jest.fn()
    Date.now = jest.fn(() => 'timestamp')
})

afterAll(() => {
    jest.resetAllMocks()
})

describe('getFavorites', () => {
    it('calls getJSON with the correct URL and queryString', () => {
        const params = {
            eventType: 'eventType',
            pageSize: 'pageSize',
            sortOrder: 'sortOrder',
        }
        get.getJSON.mockImplementationOnce(url => Promise.resolve(url))

        return expect(getFavorites(params)).resolves.toMatchSnapshot()
    })
})

describe('getDataStatistics', () => {
    it('calls getJSON with the correct URL and queryString', () => {
        const params = {
            startDate: 'startDate',
            endDate: 'endDate',
            interval: 'interval',
        }
        get.getJSON.mockImplementationOnce(url => Promise.resolve(url))

        return expect(getDataStatistics(params)).resolves.toMatchSnapshot()
    })
})

describe('getUserLocale', () => {
    it('calls getJSON with the correct URL and queryString', () => {
        get.getJSON.mockImplementationOnce(url =>
            Promise.resolve({ keyUiLocale: url })
        )

        return expect(getUserLocale()).resolves.toMatchSnapshot()
    })
})

describe('getUsageData', () => {
    it('calls getJSON with the correct URL and queryString for TOP_FAVORITES category', () => {
        const params = {
            category: TOP_FAVORITES,
            eventType: 'eventType',
            pageSize: 'pageSize',
            sortOrder: 'sortOrder',
        }
        get.getJSON.mockImplementationOnce(url => Promise.resolve(url))

        return expect(getUsageData(params)).resolves.toMatchSnapshot()
    })

    it('calls getJSON with the correct URL and queryString in other cases', () => {
        const params = {
            startDate: 'startDate',
            endDate: 'endDate',
            interval: 'interval',
        }
        get.getJSON.mockImplementationOnce(url => Promise.resolve(url))

        return expect(getUsageData(params)).resolves.toMatchSnapshot()
    })
})

describe('initApp', () => {
    it('resolves to usageData and locale', () => {
        get.getJSON.mockImplementation(url => {
            if (url === 'userSettings') {
                return Promise.resolve({ keyUiLocale: 'locale' })
            }

            return Promise.resolve('usageData')
        })

        return expect(initApp({ filter: '' })).resolves.toMatchSnapshot()
    })

    it('calls setLocale correctly', () => {
        get.getJSON.mockImplementation(url => {
            if (url === 'userSettings') {
                return Promise.resolve({ keyUiLocale: 'locale' })
            }

            return Promise.resolve('usageData')
        })

        expect.assertions(1)

        return initApp({ filter: '' }).then(() => {
            expect(locale.setLocale).toHaveBeenCalledWith('locale')
        })
    })
})
