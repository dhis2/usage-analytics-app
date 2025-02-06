import { Card } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'

/**
 * The div wrapping the Card is used to constrain the 100% height of the Card.
 */

const TableWrapper = ({ children }) => (
    <div>
        <Card>{children}</Card>
    </div>
)

TableWrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default TableWrapper
