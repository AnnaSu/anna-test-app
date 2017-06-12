const autoprefixer = require('autoprefixer');
const postcssSimpleVars = require('postcss-simple-vars');
const postcssNested = require('postcss-nested');

module.exports = function override (config, env) {
    config.module.rules.splice(4, 1);
    config.module.rules.push({
        test: /\.css$/,
        use: [
            require.resolve('style-loader'),
            {
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1,
                    modules: true
                },
            },
            {
                loader: require.resolve('postcss-loader'),
                options: {
                    ident: 'postcss',
                    plugins: () => [
                        postcssSimpleVars,
                        postcssNested,
                        require('postcss-flexbugs-fixes'),
                        autoprefixer({
                            browsers: [
                                '>1%',
                                'last 4 versions',
                                'Firefox ESR',
                                'not ie < 9', // React doesn't support IE8 anyway
                            ],
                            flexbox: 'no-2009'
                        })
                    ],
                }
            }
        ],
    });
    return config;
};
