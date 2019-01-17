module.exports = function(api) {
    api.cache.forever()

    const presets = ['@babel/preset-react', '@babel/preset-env']

    return {
        presets,
        env: {
            test: {
                presets,
                plugins: ['@babel/plugin-transform-modules-commonjs'],
            },
        },
    }
}
