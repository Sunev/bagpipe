const path = require('path');

module.exports = {
    mode: "production",
    entry: './index.js',
    output: {
        filename: 'bagpipe_packed.js',
        path: path.resolve(__dirname, 'dist')
    }
};