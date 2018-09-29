module.exports = {
    staticFileGlobs: [
        'manifest.json',
        'src/**/*',
    ],
    runtimeCaching: [
        {
            urlPattern: /\/@webcomponents\/webcomponentsjs\//,
            handler: 'fastest'
        },
        {
            urlPattern: /^https:\/\/fonts.gstatic.com\//,
            handler: 'fastest'
        },
        {
            urlPattern: /^https:\/\/node-hnapi.herokuapp.com\/news|newest|show|ask|jobs|item|user/,
            handler: 'fastest'
        }
    ]
};
