import { CHART_FIELDS as FIELDS } from './fields.js'
import { FAVORITE_VIEWS } from '../../constants/categories'
import { formatIntervalDate } from '../../utils/date.js'
import * as config from './config'

export default function parseChartData({
    aggregation,
    category,
    chartType,
    interval,
    data,
}) {
    const labels = []
    const datasets = []
    const fields =
        category === FAVORITE_VIEWS
            ? FIELDS[category][aggregation][chartType]
            : FIELDS[category]
    const dataPointsLen = data.length
    const fieldsLen = fields.length

    for (
        let dataPointIndex = 0;
        dataPointIndex < dataPointsLen;
        dataPointIndex++
    ) {
        const dataPoint = data[dataPointIndex]
        labels.push(formatIntervalDate(dataPoint, interval))

        for (let fieldIndex = 0; fieldIndex < fieldsLen; fieldIndex++) {
            const field = fields[fieldIndex]

            if (dataPointIndex === 0) {
                datasets.push({
                    ...config.dataSet,
                    label: field.label,
                    data: [],
                    borderColor: config.colors[fieldIndex],
                })
            }

            const pointValue = dataPoint[field.key]

            datasets[fieldIndex].data.push(pointValue)
        }
    }

    return {
        data: {
            labels,
            datasets,
        },
        options: config.options,
    }
}
