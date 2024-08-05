const Encore = require('@symfony/webpack-encore');

if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

Encore
    .setOutputPath('public/build/')

    .setPublicPath('/build')

    .addEntry('app', './assets/app.js')

    .splitEntryChunks()

    .enableReactPreset()

    .enablePostCssLoader()

    .enableStimulusBridge('./assets/controllers.json')

    .enableSingleRuntimeChunk()

    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    .enableVersioning(Encore.isProduction())

    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = '3.23';
    })

    .enableSassLoader()

    .configureDevServerOptions(options => {
        options.liveReload = true;
        options.static = {
            watch: false
        };
        options.watchFiles = {
            paths: ['src/**/*.php', 'templates/**/*'],
        };
    })
;

module.exports = Encore.getWebpackConfig();
