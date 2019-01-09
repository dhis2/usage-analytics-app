import {
    createValueGetterForFilterKey,
    mapStartDateProps,
    mapEndDateProps,
} from './index'

const state = {
    filter: {
        pageSize: 10,
        startDate: '2018-8-12',
        endDate: '2018-12-12',
    },
}

describe('FilterFields', () => {
    const createdFilterValueGetter = createValueGetterForFilterKey('pageSize')

    it('createValueGetterForFilterKey returns a function', () => {
        expect(typeof createdFilterValueGetter).toBe('function')
    })

    it('the function created by createValueGetterForFilterKey returns the correct value when called', () => {
        expect(createdFilterValueGetter(state)).toEqual({ value: 10 })
    })

    it('mapStartDateProps returns the correct initialValue and endDate', () => {
        expect(mapStartDateProps(state)).toEqual({
            initialValue: state.filter.startDate,
            endDate: state.filter.endDate,
        })
    })

    it('mapEndDateProps returns the correct initialValue and startDate', () => {
        expect(mapEndDateProps(state)).toEqual({
            initialValue: state.filter.endDate,
            startDate: state.filter.startDate,
        })
    })
})
