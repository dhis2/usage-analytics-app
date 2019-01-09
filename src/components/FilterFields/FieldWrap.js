import React from 'react'
import PropTypes from 'prop-types'

export function FieldWrap({ component: Component, ...rest }) {
    return (
        <div className="uaa-fieldwrap">
            <Component {...rest} />
        </div>
    )
}

FieldWrap.propTypes = {
    component: PropTypes.element,
}

export default FieldWrap
