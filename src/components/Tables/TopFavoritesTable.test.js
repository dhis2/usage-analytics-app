import React from 'react'
import { mount } from 'enzyme'
import TopFavoritesTable from './TopFavoritesTable.js'

describe('<TopFavoritesTable>', () => {
    it('renders the expected table headers', () => {
        const expectedHeaders = ['Position', 'Name', 'Views', 'ID', 'Created']
        const props = {
            data: [],
        }

        const wrapper = mount(<TopFavoritesTable {...props} />)
        const headers = wrapper.find('TableCellHead')

        expect.assertions(5)

        headers.forEach((header, i) => {
            expect(header.text()).toBe(expectedHeaders[i])
        })
    })

    it('renders the expected table contents', () => {
        const expectedContents = ['1', 'name', '2', 'id', 'Jul 31, 2012']
        const props = {
            data: [
                {
                    position: 1,
                    name: 'name',
                    views: 2,
                    id: 'id',
                    created: '2012-07-31T00:00:00.000',
                },
            ],
        }

        const wrapper = mount(<TopFavoritesTable {...props} />)
        const contents = wrapper.find('TableCell')

        expect.assertions(5)

        contents.forEach((content, i) => {
            expect(content.text()).toBe(expectedContents[i])
        })
    })
})
