const path = require('path');
const entryFile = "./src/app.js";
const distPath = path.resolve(__dirname, "dist");
const bundleName = 'bundle.js';

module.exports = {
    entry: entryFile,
    output: {
        path: distPath,
        filename: bundleName
    },
    module: {
        loaders: [
            {
                test: /\.js$/, // Which files to bundle
                exclude: /node_modules/, // Which files NOT to bundle
                loader: 'babel-loader' // What transform to apply
            }
        ]
    }
}