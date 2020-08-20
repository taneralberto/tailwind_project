const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
    plugins: [
        require('cssnano')({
            preset: 'default',
        }),
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        purgecss({
            content: ['./**/*html', './**/*.php'],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
    ]
}