import { CHART_FIELDS as FIELDS } from './fields.js'
import { FAVORITE_VIEWS } from '../../constants/categories'
import { formatIntervalDate } from '../../utils/date.js'
import * as config from './config'

// This will ensure that the chart at has an yAxis from 0 - 1
const MIN_SUGGESTED_MAX_VALUE = 1

export default function parseChartData({
    aggregation,
    category,
    chartType,
    interval,
    data,
}) {
    const labels = []
    const datasets = []
    let max = MIN_SUGGESTED_MAX_VALUE
    let min = null
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

            if (pointValue > max) {
                max = pointValue
            }

            if (min === null || pointValue < min) {
                min = pointValue
            }

            datasets[fieldIndex].data.push(pointValue)
        }
    }

    config.options.scales.yAxes[0].ticks.suggestedMax = max
    config.options.scales.yAxes[0].ticks.suggestedMin = min

    config.options.onResize = onChartResize

    return {
        data: {
            labels,
            datasets,
        },
        options: config.options,
    }
}

export function onChartResize(chart) {
    chart.resize()
}
