import routesEngine from './routesEngine.js'
import RenderEngine from './render.js'
class EngineApp{
    count=0
    //Define routes
    routesEngine = new routesEngine
    renderEngine = new RenderEngine
}

export default  EngineApp
