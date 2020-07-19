import routesEngine from './routesEngine.js'
class EngineApp{
    count=0
    //Define routes
    routesEngine= new routesEngine
    updateFunction(functionData){
        window.addEventListener("load",
        ()=>functionData
        ,false)
    }
}

export default  EngineApp
