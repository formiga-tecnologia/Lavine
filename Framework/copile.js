//Criar aqui o exportador do WebPack//
import routesEngine from './routesEngine.js'
import RenderEngine from './render.js'
import Components from './components.js'
import Security from './security.js'
import reactive from './reactive.js'

const RoutesEngine = ()=>{
    const RouteEngine = new routesEngine()
    return RouteEngine
}

const Renders = () =>{
    const Renders = new RenderEngine()
    return Renders
}

class hj{
    teste(){
        
    }
}

export default new hj