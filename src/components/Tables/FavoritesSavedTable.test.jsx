import { mount } from 'enzyme'
import React from 'react'
import FavoritesSavedTable from './FavoritesSavedTable.jsx'

describe('<FavoritesSavedTable>', () => {
    it('renders the expected table headers', () => {
        const expectedHeaders = [
            'Date',
            'Maps',
            'Visualizations',
            'Event Reports',
            'Event Charts',
            'Dashboards',
            'Indicators',
        ]
        const props = {
            data: [],
            interval: 'YEAR',
        }

        const wrapper = mount(<FavoritesSavedTable {...props} />)
        const headers = wrapper.find('TableCellHead')

        expect.assertions(7)

        headers.forEach((header, i) => {
            expect(header.text()).toBe(expectedHeaders[i])
        })
    })

    it('renders the expected table contents', () => {
        const expectedContents = ['2020', '1', '2', '3', '4', '5', '6']
        const props = {
            data: [
                {
                    savedMaps: 1,
                    savedVisualizations: 2,
                    savedEventReports: 3,
                    savedEventCharts: 4,
                    savedDashboards: 5,
                    savedIndicators: 6,
                    year: 2020,
                },
            ],
            interval: 'YEAR',
        }

        const wrapper = mount(<FavoritesSavedTable {...props} />)
        const contents = wrapper.find('TableCell')

        expect.assertions(7)

        contents.forEach((content, i) => {
            expect(content.text()).toBe(expectedContents[i])
        })
    })
})
