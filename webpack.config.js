const path  = Require('path')
Module.exports ={
    entry: "./Framework/engine.js",
    output:{
        filenmae:"engine.js",
        path:path.resolve(__dirname,"dist"),
    }
}