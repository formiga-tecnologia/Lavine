const path  = require('path')
module.exports ={
    mode: 'development',
    entry: './Framework/copile.js',
    output:{
        filename:"engine.js",
        path: path.resolve(__dirname,"lavine"),
    }
}