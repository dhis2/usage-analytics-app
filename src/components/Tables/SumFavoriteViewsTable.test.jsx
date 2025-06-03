import { mount } from 'enzyme'
import React from 'react'
import SumFavoriteViewsTable from './SumFavoriteViewsTable.jsx'

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
        const expectedContents = ['2020', '1', '2', '3', '4', '5', '6', '7']
        const props = {
            data: [
                {
                    mapViews: 1,
                    visualizationViews: 2,
                    eventReportViews: 3,
                    eventChartViews: 4,
                    dashboardViews: 5,
                    dataSetReportViews: 6,
                    totalViews: 7,
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
