import routesEngine from './routesEngine.js'
import RenderEngine from './render.js'
import Components from './components.js'
import Security from './security.js'
import reactive from './reactive.js'
class EngineApp{
    count=0
    routesEngine = new routesEngine
    renderEngine = new RenderEngine
    componentsEngine = new Components
    Security = new Security
    Reactive = new reactive
}

export default  EngineApp
