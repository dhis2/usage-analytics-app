import i18n from '@dhis2/d2-i18n'

export const SUM = 'SUM'
export const AVERAGE = 'AVERAGE'

const aggregations = [
    { value: SUM, label: i18n.t('Sum') },
    { value: AVERAGE, label: i18n.t('Average') },
]

export default aggregations
