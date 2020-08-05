import routesEngine from './routesEngine.js'
import RenderEngine from './render.js'
import Components from './components.js'
import Security from './security.js'
class EngineApp{
    count=0
    routesEngine = new routesEngine
    renderEngine = new RenderEngine
    componentsEngine = new Components
    Security = new Security
}

export default  EngineApp
