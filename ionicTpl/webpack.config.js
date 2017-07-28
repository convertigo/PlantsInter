/**
 * Created by charlesg on 13/03/2017.
 */

// imports
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ngToolsWebpack = require('@ngtools/webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var ModuleConcatPlugin = require('webpack/lib/optimize/ModuleConcatenationPlugin'); 

//used to find external ip adress
function findExternalIpAddress() {
    const os = require('os');
    const ifaces = os.networkInterfaces();
    for (let name of Object.keys(ifaces)) {
        for (let iface of ifaces[name]) {
            if (iface.family === 'IPv4' && !iface.internal) {
                return iface.address;
            }
        }
    }
    throw new Error('Could not find the external IP address of this machine');
}

function createWebpackConfig(env={}) {
    //
    // The following environment variables can be used to tweak the build:
    //  * BUILD_MODE: can be 'dev' or 'prod'; defaults to 'dev'
    //  * BUILD_TARGET: can be 'web' or 'cordova'; defaults to 'web'
    //  * LIVE_RELOAD: can be 'true' or 'false; defaults to 'false' and not full implemented yet ...
    //  * WATCH_MODE: can be 'true' or 'false; defaults to 'true'
    //
    const buildMode = env.BUILD_MODE || 'dev';
    const buildTarget = env.BUILD_TARGET || 'web';
    const liveReload = env.LIVE_RELOAD || false;
    const watchMode = (!(env.WATCH_MODE == "false"));

    // defaults for buildMode === 'dev'
    let tsLoader = ['@angularclass/hmr-loader', 'ts-loader', 'angular2-template-loader'];
    let scssLoader = ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'];

    // used in case of build mode set to prod it will allow us to compile with Aot ...
    if (buildMode === 'prod') {
        tsLoader = '@ngtools/webpack';
        scssLoader = ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: ['css-loader', 'postcss-loader', 'sass-loader']
        });
    }

    // here we define output directory set here
    var outputDir = "../DisplayObjects/mobile";

    // used in case of livereload but not implemented yet ...
    var serverAddress = '';
    if (liveReload) {
        serverAddress = findExternalIpAddress() + ':18082';
    }

    // here thanks several variables definition set above we will configure webpack
    const webpackConfig = {

        // we define entry point
        entry: {
            'app': './src/main.ts',
            'polyfills': [
                'core-js/es6',
                'core-js/es7/reflect',
                'zone.js/dist/zone'
            ]
        },
        // and set an output folder
        output: {
            path: path.resolve(__dirname, outputDir),
            filename: buildMode === 'prod' ? '[name].[hash].js' : '[name].js',
            devtoolModuleFilenameTemplate: ionicWebpackFactory.getSourceMapperFunction(), 
        },
        // then we set module => assign a loader to a type of file ...
        module: {
            loaders: [
                {
                    test: /\.ts$/,
                    loader: tsLoader
                },
                { test: /\.html$/, loader: 'raw-loader' },
                { test: /\.scss$/, exclude: path.resolve('src/app'), loader: scssLoader },
                { test: /\.scss$/, include: path.resolve('src/app'), loader: ['raw-loader', 'postcss-loader', 'sass-loader'] },
                { test: /\.(eot|svg|ttf|woff|woff2)(\?v=.*)?$/, loader: 'file-loader?name=fonts/[name].[ext]' }
            ]
        },
        resolve: {
            extensions: ['.js', '.ts', '.html', '.scss']
        },
        plugins: [
            // see https://github.com/angular/angular/issues/11580
            new webpack.ContextReplacementPlugin(
                /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
                './src'
            ),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'polyfills'
            }),
            new HtmlWebpackPlugin({
                inject: buildMode === 'prod',
                template: './src/index-' + buildMode + '.ejs',
                buildTarget: buildTarget,
                serverAddress: liveReload ? `http://${serverAddress}/` : ''
            }),
            new webpack.DefinePlugin({
                build: {
                    mode: JSON.stringify(buildMode),
                    target: JSON.stringify(buildTarget)
                }
            }),
            new webpack.LoaderOptionsPlugin({
                options: {
                    resolve: {
                        // see https://github.com/TypeStrong/ts-loader/issues/283#issuecomment-249414784
                    },
                    postcss: [
                        autoprefixer({
                            // taken from https://github.com/driftyco/ionic-app-scripts/blob/master/config/sass.config.js
                            browsers: [
                                'last 2 versions',
                                'iOS >= 8',
                                'Android >= 4.4',
                                'Explorer >= 11',
                                'ExplorerMobile >= 11'
                            ],
                            cascade: false
                        })
                    ]
                }
            }),
            new ModuleConcatPlugin(), 
        ],
        // Some libraries import Node modules but don't use them in the browser. 
	    // Tell Webpack to provide empty mocks for them so importing them works. 
	    node: { 
	        fs: 'empty', 
	        net: 'empty', 
	        tls: 'empty' 
	    }, 
        // then set devServer adress and port ...
        devServer: {
            host: '0.0.0.0',
            port: '18082',
            public: liveReload ? serverAddress : '',
            stats: 'errors-only'
        },
        //watch and options set to true here (by default watch is set to false with webpack and set to true with webpack-dev-server) ...
        watch: watchMode,
        watchOptions:{
            aggregateTimeout: 300,
            poll: 1000,
            ignored: /node_modules/
        }

    };

    // in case of prod mode we use Aot to compile our files
    if (buildMode === 'prod') {
        webpackConfig.plugins.push(
            new ngToolsWebpack.AotPlugin({
                tsConfigPath: './tsconfig.json',
                entryModule: path.resolve(__dirname, 'src/app/app.module#AppModule'),
            }),
            new ExtractTextPlugin({
                filename: buildMode === 'prod' ? '[name].[hash].css' : '[name].css'
            })
        );
    }

    return webpackConfig;
}

module.exports = createWebpackConfig;
