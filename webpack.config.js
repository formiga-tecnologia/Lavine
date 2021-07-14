const path  = require('path')
module.exports ={
    entry: './Framework/copile.js',
    output:{
        filename:"engine.js",
        library: {
            "name":'engine',
            "type":'commonjs',
            "export":"default"
        },
        path: path.resolve(__dirname,"dist"),
    }
}