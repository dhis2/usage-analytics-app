import * as uiApi from '@dhis2/ui/utils/api'
import * as loc from '../utils/locale'
// Named imports used for the actual tests
// and the main api object for creating mocks
import api, {
    initApp,
    getUsageData,
    getFavorites,
    getDataStatistics,
    getUserLocale,
    getJSON,
} from './index'
import { getInitialState as getDefaultFilter } from '../reducers/filter'
import { dataStatistics } from '../__mockData__/usageData'
import { TOP_FAVORITES } from '../constants/categories'

// Default filter category is FAVORTE_VIEWS
const filter = getDefaultFilter(new Date())
const locale = 'de'
const usageData = dataStatistics

describe('initApp', () => {
    api.getUserLocale = jest.fn(() => Promise.resolve(locale))
    api.getUsageData = jest.fn(() => Promise.resolve(usageData))
    loc.setLocale = jest.fn()

    const promise = initApp({ filter })

    it('to return a payload object with the correct usageData and locale properties', () => {
        promise.then(data => {
            expect(data).toEqual({
                usageData,
                locale,
            })
        })
    })
    it('calls getUserLocale once', () => {
        promise.then(() => {
            expect(api.getUserLocale).toHaveBeenCalledTimes(1)
        })
    })
    it('calls getUsageData with filter as argument', () => {
        promise.then(() => {
            expect(api.getUsageData).toHaveBeenCalledWith(filter)
        })
    })
    it('calls setLocale with the correct locale value', () => {
        promise.then(() => {
            expect(loc.setLocale).toHaveBeenCalledWith(locale)
        })
    })
})

describe('getUsageData', () => {
    api.getFavorites = jest.fn()
    api.getDataStatistics = jest.fn()

    it('when filter category is TOP_FAVORITES it calls getFavorites with filter as argument', () => {
        const filter = {
            ...getDefaultFilter(new Date()),
            category: TOP_FAVORITES,
        }
        getUsageData(filter)
        expect(api.getFavorites).toHaveBeenCalledWith(filter)
    })

    it('when filter category is not TOP_FAVORITES it calls getDataStatistics with filter as argument', () => {
        getUsageData(filter)
        expect(api.getDataStatistics).toHaveBeenCalledWith(filter)
    })
})

describe('getFavorites', () => {
    it('calls getJSON with the correct URL and queryString', () => {
        // api.getJSON.mockClear()
        api.getJSON = jest.fn()
        // Make sure test doesn't fail because timestamp is off by 1
        Date.now = () => 1547546967176
        const filter = {
            eventType: 'CHART_VIEW',
            pageSize: 10,
            sortOrder: 'ASC',
        }
        const expectedQueryString = [
            'dataStatistics/favorites?',
            `eventType=${filter.eventType}`,
            `&pageSize=${filter.pageSize}`,
            `&sortOrder=${filter.sortOrder}`,
            `&_=${Date.now()}`,
        ].join('')
        getFavorites(filter)
        expect(api.getJSON).toBeCalledWith(expectedQueryString)
    })
})

describe('getDataStatistics', () => {
    it('calls getJSON with the correct URL and queryString', () => {
        api.getJSON = jest.fn()
        // Make sure test doesn't fail because timestamp is off by 1
        Date.now = () => 1547546967176
        const filter = {
            startDate: '2018-08-12',
            endDate: '2018-12-12',
            interval: 'WEEK',
        }
        const expectedQueryString = [
            'dataStatistics?',
            `startDate=${filter.startDate}`,
            `&endDate=${filter.endDate}`,
            `&interval=${filter.interval}`,
            `&_=${Date.now()}`,
        ].join('')
        getDataStatistics(filter)
        expect(api.getJSON).toBeCalledWith(expectedQueryString)
    })
})

describe('getUserLocale', () => {
    const resp = { keyUiLocale: locale }

    beforeAll(() => {
        api.getJSON = jest.fn(() => Promise.resolve(resp))
    })

    it('calls getJSON with the correct URL', () => {
        const expectedQueryString = 'userSettings'
        getUserLocale()
        expect(api.getJSON).toBeCalledWith(expectedQueryString)
    })

    it('returns the keyUiLocale property from the response object', () => {
        getUserLocale().then(data => {
            expect(data).toEqual(locale)
        })
    })
})

describe('getJSON', () => {
    const url = 'test'
    const errorResponse = {
        status: 'ERROR',
        message: 'Oops',
    }

    it('calls the ui/get function with the correct argument / url', () => {
        uiApi.get = jest.fn(() =>
            Promise.resolve(createMockResponse(dataStatistics))
        )
        getJSON(url).then(() => {
            expect(uiApi.get).toHaveBeenCalledWith(url)
        })
    })

    it('calls the json() method on the response object', () => {
        const mockResponse = createMockResponse(dataStatistics)
        uiApi.get = jest.fn(() => Promise.resolve(mockResponse))
        getJSON(url).then(() => {
            expect(mockResponse.json).toHaveBeenCalledTimes(1)
        })
    })

    it('returns the correct response object if the response is OK', () => {
        uiApi.get = jest.fn(() =>
            Promise.resolve(createMockResponse(dataStatistics))
        )
        getJSON(url).then(data => {
            expect(data).toEqual(dataStatistics)
        })
    })

    it('returns the correct response object if the response is OK', () => {
        uiApi.get = jest.fn(() =>
            Promise.resolve(createMockResponse(errorResponse))
        )
        getJSON(url).catch(error => {
            expect(error.toString()).toEqual(`Error: ${errorResponse.message}`)
        })
    })

    afterAll(() => {
        jest.resetAllMocks()
    })
})

function createMockResponse(json) {
    return {
        json: jest.fn(() => json),
    }
}
