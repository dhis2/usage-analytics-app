const config = {
    type: 'app',
    name: 'usage-analytics',
    title: 'Usage Analytics',
    coreApp: true,

    minDHIS2Version: '2.37',

    entryPoints: {
        app: './src/components/App/App.js',
    },
}

module.exports = config
