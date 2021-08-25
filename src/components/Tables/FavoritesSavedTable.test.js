import { mount } from 'enzyme'
import React from 'react'
import FavoritesSavedTable from './FavoritesSavedTable.js'

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
        const expectedContents = ['2020', '1', '2', '4', '5', '6', '7']
        const props = {
            data: [
                {
                    savedMaps: 1,
                    savedVisualizations: 2,
                    savedEventReports: 4,
                    savedEventCharts: 5,
                    savedDashboards: 6,
                    savedIndicators: 7,
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
