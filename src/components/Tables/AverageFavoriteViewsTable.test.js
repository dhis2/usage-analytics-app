import React from 'react'
import { mount } from 'enzyme'
import AverageFavoriteViewsTable from './AverageFavoriteViewsTable.js'

describe('<AverageFavoriteViewsTable>', () => {
    it('renders the expected table headers', () => {
        const expectedHeaders = [
            'Date',
            'Average Map',
            'Average Chart',
            'Average Pivot Table',
            'Average Event Report',
            'Average Event Chart',
            'Average Dashboard',
            'Average',
        ]
        const props = {
            data: [],
            interval: 'YEAR',
        }

        const wrapper = mount(<AverageFavoriteViewsTable {...props} />)
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
                    averageMapViews: 1,
                    averageChartViews: 2,
                    averagePivotTableViews: 3,
                    averageEventReportViews: 4,
                    averageEventChartViews: 5,
                    averageDashboardViews: 6,
                    averageViews: 7,
                    year: 2020,
                },
            ],
            interval: 'YEAR',
        }

        const wrapper = mount(<AverageFavoriteViewsTable {...props} />)
        const contents = wrapper.find('TableCell')

        expect.assertions(8)

        contents.forEach((content, i) => {
            expect(content.text()).toBe(expectedContents[i])
        })
    })
})
