import menu from "../components/menu.js"
import EngineApp from '../../Framework/engine.js'

var eng=new EngineApp()
//renderizar o menu
eng.componentsEngine.createComponent("menu",menu())
eng.componentsEngine.renderComponent("dinamic","menu")
//sistemas De rotas
eng.routesEngine.registerRoute("http://127.0.0.1:5500/LavineWiki/index.html#pageInitial",teste)
eng.routesEngine.runRoute("http://127.0.0.1:5500/LavineWiki/index.html","http://127.0.0.1:5500/LavineWiki/index.html#pageInitial")

function teste(){
    console.log("ai")
}