module.exports = {
    context: __dirname +'/src',
    entry: './main.jsx',
    output: {
        path: __dirname + '/public',
        filename: 'app.js'
    },
    watch: true,
    devtool: 'cheap-module-source-map',
    module: {
        loaders:[
            {
                test: /\.jsx?$/,
                exclude:/node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};