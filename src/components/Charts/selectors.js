import i18n from '@dhis2/d2-i18n'
import CATEGORIES from '../../constants/categories'
import { getIntervalDate } from '../../selectors/date.js'

export const getTitles = selected => {
    const selectedCategory = CATEGORIES.find(
        category => category.value === selected
    )

    return {
        title: selectedCategory.label,
        subtitle: selectedCategory.subtitle,
    }
}

export const getLabels = (data, interval) =>
    data.map(({ year, month, week, day }) =>
        getIntervalDate({ year, month, week, day }, interval)
    )

export const getDataValuesDatasets = data => [
    {
        label: i18n.t('Data Values'),
        data: data.map(d => d.savedDataValues),
        borderColor: '#7cb5ec',
    },
]
