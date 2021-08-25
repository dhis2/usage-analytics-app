import { mount } from 'enzyme'
import React from 'react'
import SumFavoriteViewsTable from './SumFavoriteViewsTable.js'

describe('<SumFavoriteViewsTable>', () => {
    it('renders the expected table headers', () => {
        const expectedHeaders = [
            'Date',
            'Map',
            'Visualization',
            'Event Report',
            'Event Chart',
            'Dashboard',
            'Data Set Report',
            'Total',
        ]
        const props = {
            data: [],
            interval: 'YEAR',
        }

        const wrapper = mount(<SumFavoriteViewsTable {...props} />)
        const headers = wrapper.find('TableCellHead')

        expect.assertions(8)

        headers.forEach((header, i) => {
            expect(header.text()).toBe(expectedHeaders[i])
        })
    })

    it('renders the expected table contents', () => {
        const expectedContents = ['2020', '1', '2', '4', '5', '6', '7', '8']
        const props = {
            data: [
                {
                    mapViews: 1,
                    visualizationViews: 2,
                    eventReportViews: 4,
                    eventChartViews: 5,
                    dashboardViews: 6,
                    dataSetReportViews: 7,
                    totalViews: 8,
                    year: 2020,
                },
            ],
            interval: 'YEAR',
        }

        const wrapper = mount(<SumFavoriteViewsTable {...props} />)
        const contents = wrapper.find('TableCell')

        expect.assertions(8)

        contents.forEach((content, i) => {
            expect(content.text()).toBe(expectedContents[i])
        })
    })
})
