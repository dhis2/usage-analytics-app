import { mount } from 'enzyme'
import React from 'react'
import DataValuesTable from './DataValuesTable.jsx'

describe('<DataValuesTable>', () => {
    it('renders the expected table headers', () => {
        const expectedHeaders = ['Date', 'Data Values']
        const props = {
            data: [],
            interval: 'YEAR',
        }

        const wrapper = mount(<DataValuesTable {...props} />)
        const headers = wrapper.find('TableCellHead')

        expect.assertions(2)

        headers.forEach((header, i) => {
            expect(header.text()).toBe(expectedHeaders[i])
        })
    })

    it('renders the expected table contents', () => {
        const expectedContents = ['2020', '1']
        const props = {
            data: [
                {
                    savedDataValues: 1,
                    year: 2020,
                },
            ],
            interval: 'YEAR',
        }

        const wrapper = mount(<DataValuesTable {...props} />)
        const contents = wrapper.find('TableCell')

        expect.assertions(2)

        contents.forEach((content, i) => {
            expect(content.text()).toBe(expectedContents[i])
        })
    })
})
