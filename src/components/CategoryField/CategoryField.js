import i18n from '@dhis2/d2-i18n'
import { PropTypes } from '@dhis2/prop-types'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui'
import React from 'react'
import categories from '../../constants/categories.js'
import FieldSpacer from '../FieldSpacer/index.js'

const CategoryField = ({ category, setCategory }) => (
    <FieldSpacer>
        <SingleSelectField
            selected={category}
            onChange={({ selected }) => {
                setCategory(selected)
            }}
            label={i18n.t('Category')}
        >
            {categories.map(({ label, value }) => (
                <SingleSelectOption label={label} key={value} value={value} />
            ))}
        </SingleSelectField>
    </FieldSpacer>
)

CategoryField.propTypes = {
    category: PropTypes.string.isRequired,
    setCategory: PropTypes.func.isRequired,
}

export default CategoryField
