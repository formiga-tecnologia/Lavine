import routesEngine from './routesEngine.js'
import RenderEngine from './render.js'
import Components from './components.js'
class EngineApp{
    count=0
    //Define routes
    routesEngine = new routesEngine
    renderEngine = new RenderEngine
    componentsEngine = new Components
}

export default  EngineApp
