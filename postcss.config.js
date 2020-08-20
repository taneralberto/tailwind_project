const purgecss = require('@fullhuman/postcss-purgecss');

const postcssConfig = {
    plugins: [
        require('postcss-import'),
        require('tailwindcss'),
        require('autoprefixer'),
        purgecss({
            content: ['./**/*html', './**/*.php'],
            defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
        })
    ]
}

/*if (process.env.NODE_ENV === 'production') {
    postcssConfig.plugins.push(
        require('cssnano')({
            preset: 'default',
        })
    );
}*/

module.exports = postcssConfig;