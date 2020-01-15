import i18n from '@dhis2/d2-i18n'

export const SUM = 'SUM'
export const AVERAGE = 'AVERAGE'

const AGGREGATIONS = {
    [SUM]: { value: SUM, label: i18n.t('Sum') },
    [AVERAGE]: { value: AVERAGE, label: i18n.t('Average') },
}
export default AGGREGATIONS
