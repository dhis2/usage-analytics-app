import i18n from '@dhis2/d2-i18n'

/**
 * These are the options we apply to each Line graph.
 * For documentation on the options see:
 *
 * - https://github.com/reactchartjs/react-chartjs-2
 * - https://www.chartjs.org/docs/latest/
 */

const options = {
    animation: {
        duration: 180,
    },
    legend: {
        position: 'bottom',
    },
    maintainAspectRatio: false,
    elements: {
        line: {
            tension: 0,
            fill: false,
            backgroundColor: 'rgba(0, 0, 0, 0)',
        },
    },
    scales: {
        yAxes: [
            {
                scaleLabel: {
                    display: true,
                    labelString: i18n.t('Values'),
                },
            },
        ],
    },
}

export default options
