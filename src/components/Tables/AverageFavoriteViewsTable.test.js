import { mount } from 'enzyme'
import React from 'react'
import AverageFavoriteViewsTable from './AverageFavoriteViewsTable.js'

describe('<AverageFavoriteViewsTable>', () => {
    it('renders the expected table headers', () => {
        const expectedHeaders = [
            'Date',
            'Average Map',
            'Average Visualization',
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
                    averageMapViews: 1,
                    averageVisualizationViews: 2,
                    averageEventReportViews: 3,
                    averageEventChartViews: 4,
                    averageDashboardViews: 5,
                    averageViews: 6,
                    year: 2020,
                },
            ],
            interval: 'YEAR',
        }

        const wrapper = mount(<AverageFavoriteViewsTable {...props} />)
        const contents = wrapper.find('TableCell')

        expect.assertions(7)

        contents.forEach((content, i) => {
            expect(content.text()).toBe(expectedContents[i])
        })
    })
})
