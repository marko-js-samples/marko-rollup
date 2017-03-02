import commonjsPlugin from 'rollup-plugin-commonjs';
import browserifyPlugin from 'rollup-plugin-browserify-transform';
import nodeResolvePlugin from 'rollup-plugin-node-resolve';
import markoify from 'markoify';
import envify from 'envify';
import path from 'path';

export default {
    entry: path.join(__dirname, 'routes/index/client.js'),
    format: 'iife',
    moduleName: 'app',
    plugins: [
        browserifyPlugin(markoify),
        browserifyPlugin(envify),
        nodeResolvePlugin({
            jsnext: true,  // Default: false
            main: true,  // Default: true
            browser: true,  // Default: false
            preferBuiltins: false,
            extensions: [ '.js', '.marko' ]
        }),
        commonjsPlugin({
            include: [ 'node_modules/**', '**/*.marko', '**/*.js'],
            extensions: [ '.js', '.marko' ]
        })
    ],
    dest: path.join(__dirname, './static/bundle.js')
};