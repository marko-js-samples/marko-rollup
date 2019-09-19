import commonjsPlugin from 'rollup-plugin-commonjs';
import browserifyPlugin from 'rollup-plugin-browserify-transform';
import nodeResolvePlugin from 'rollup-plugin-node-resolve';
import markoify from 'markoify';
import envify from 'envify';
import path from 'path';

export default {
    input: path.join(__dirname, 'routes/index/client.js'),
    output: {
        file: path.join(__dirname, './static/bundle.js'),
        format: 'iife',
        name: 'app'
    },
    plugins: [
        browserifyPlugin(markoify),
        browserifyPlugin(envify),
        nodeResolvePlugin({
            mainFields: ['module', 'main'],
            browser: true, // Default: false
            preferBuiltins: false,
            extensions: ['.js', '.marko']
        }),
        commonjsPlugin({
            include: ['node_modules/**', '**/*.marko', '**/*.js'],
            extensions: ['.js', '.marko']
        })
    ]
};