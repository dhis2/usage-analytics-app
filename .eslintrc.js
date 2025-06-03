const { config } = require('@dhis2/cli-style')

module.exports = {
    extends: [config.eslintReact],
    env: {
        es2020: true,
    },
}
