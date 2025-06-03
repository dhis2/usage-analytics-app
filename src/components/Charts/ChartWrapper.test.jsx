import { shallow } from 'enzyme'
import React from 'react'
import ChartWrapper from './ChartWrapper.jsx'

describe('<ChartWrapper>', () => {
    it('renders without errors', () => {
        const props = {
            title: 'Title',
            subtitle: 'Subtitle',
            children: <div>Children</div>,
        }

        shallow(<ChartWrapper {...props} />)
    })
})
