Package.describe({
    summary: 'Minifier for Meteor with PostCSS processing - use Autoprefixer and others with ease',
    version: '1.1.1',
    name: 'juliancwirko:postcss',
    git: 'https://github.com/juliancwirko/meteor-postcss.git'
});

Package.registerBuildPlugin({
    name: 'minifier-postcss',
    use: [
        'ecmascript@0.4.3',
        'minifier-css@1.1.11'
    ],
    npmDependencies: {
        'source-map': '0.5.6',
        'postcss': '5.0.21'
    },
    sources: [
        'plugin/minify-css.js'
    ]
});

Package.onUse(function(api) {
    api.use('isobuild:minifier-plugin@1.0.0');
});

Package.onTest(function(api) {

});
