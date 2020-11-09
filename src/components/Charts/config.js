import i18n from '@dhis2/d2-i18n'

export const colors = [
    '#7cb5ec',
    '#CC6600',
    '#CCCC00',
    '#66CC00',
    '#ff0066',
    '#000000',
    '#00CCCC',
]

// https://www.chartjs.org/docs/latest/configuration/

export const options = {
    animation: {
        duration: 180,
    },
    legend: {
        position: 'bottom',
    },
    maintainAspectRatio: false,
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

export const dataSet = {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    fill: false,
    lineTension: 0,
}
