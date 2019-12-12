import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { SingleSelectField, SingleSelectOption } from '@dhis2/ui-core'

import CATEGORIES from '../../constants/categories'
import INTERVALS from '../../constants/intervals'
import AGGREGATIONS from '../../constants/aggregations'
import CHART_TYPES from '../../constants/chartTypes'
import EVENT_TYPES from '../../constants/eventTypes'
import PAGE_SIZES from '../../constants/pageSizes'
import SORT_ORDERS from '../../constants/sortOrders'

export const Category = props => (
    <SingleSelectField
        {...props}
        label={i18n.t('Category')}
        selected={props.value}
    >
        {CATEGORIES.map(i => (
            <SingleSelectOption label={i.label} key={i.value} value={i.value} />
        ))}
    </SingleSelectField>
)

export const Interval = props => (
    <SingleSelectField
        {...props}
        label={i18n.t('Interval')}
        selected={props.value}
    >
        {INTERVALS.map(i => (
            <SingleSelectOption label={i.label} key={i.value} value={i.value} />
        ))}
    </SingleSelectField>
)

export const AggregationLevel = props => (
    <SingleSelectField
        {...props}
        label={i18n.t('Aggregation Level')}
        selected={props.value}
    >
        {AGGREGATIONS.map(i => (
            <SingleSelectOption label={i.label} key={i.value} value={i.value} />
        ))}
    </SingleSelectField>
)

export const ChartType = props => (
    <SingleSelectField
        {...props}
        label={i18n.t('Chart Type')}
        selected={props.value}
    >
        {CHART_TYPES.map(i => (
            <SingleSelectOption label={i.label} key={i.value} value={i.value} />
        ))}
    </SingleSelectField>
)

export const EventType = props => (
    <SingleSelectField
        {...props}
        label={i18n.t('Event Type')}
        selected={props.value}
    >
        {EVENT_TYPES.map(i => (
            <SingleSelectOption label={i.label} key={i.value} value={i.value} />
        ))}
    </SingleSelectField>
)

export const PageSize = props => (
    <SingleSelectField
        {...props}
        label={i18n.t('Page Size')}
        selected={props.value}
    >
        {PAGE_SIZES.map(i => (
            <SingleSelectOption label={i.label} key={i.value} value={i.value} />
        ))}
    </SingleSelectField>
)

export const SortOrder = props => (
    <SingleSelectField
        {...props}
        label={i18n.t('Sort Order')}
        selected={props.value}
    >
        {SORT_ORDERS.map(i => (
            <SingleSelectOption label={i.label} key={i.value} value={i.value} />
        ))}
    </SingleSelectField>
)
