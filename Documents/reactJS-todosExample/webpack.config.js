//include webpack for module loading
var webpack = require('webpack');
//manipulate path names more easily
var path = require('path');
//configure webpack
module.exports = {
	devtool: 'inline-source-map', // show line numbers in case of errors helps in debuging
	entry:[ // entry point where webpack gonna look for files
		'webpack-dev-server/client?http://127.0.0.1:8080/',
        'webpack/hot/only-dev-server',
        './src' // folder wepack going to look for initial file.since there is no file name here it look for index.js
	],
	output:{ //only for production

		path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
	},
	resolve: {
        modulesDirectories: ['node_modules', 'src'],
        extensions: ['', '.js']
    },
    module: {
        loaders: [
        {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ['react-hot', 'babel?presets[]=react,presets[]=es2015']
        }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};

