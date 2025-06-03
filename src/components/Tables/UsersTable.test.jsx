import { mount } from 'enzyme'
import React from 'react'
import UsersTable from './UsersTable.jsx'

describe('<UsersTable>', () => {
    it('renders the expected table headers', () => {
        const expectedHeaders = ['Date', 'Active Users', 'Total Users']
        const props = {
            data: [],
            interval: 'YEAR',
        }

        const wrapper = mount(<UsersTable {...props} />)
        const headers = wrapper.find('TableCellHead')

        expect.assertions(3)

        headers.forEach((header, i) => {
            expect(header.text()).toBe(expectedHeaders[i])
        })
    })

    it('renders the expected table contents', () => {
        const expectedContents = ['2020', '1', '2']
        const props = {
            data: [
                {
                    activeUsers: 1,
                    users: 2,
                    year: 2020,
                },
            ],
            interval: 'YEAR',
        }

        const wrapper = mount(<UsersTable {...props} />)
        const contents = wrapper.find('TableCell')

        expect.assertions(3)

        contents.forEach((content, i) => {
            expect(content.text()).toBe(expectedContents[i])
        })
    })
})
