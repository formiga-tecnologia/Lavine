import menu from "../components/menu.js"
import EngineApp from '../../Framework/engine.js'
import homePage from "../pages/home.js"

var eng=new EngineApp()
//renderizar o menu
menu(1)
//sistemas De rotas
eng.routesEngine.registerRoute("http://127.0.0.1:5500/LavineWiki/index.html#pageInitial",teste)
eng.routesEngine.runRoute("http://127.0.0.1:5500/LavineWiki/index.html","http://127.0.0.1:5500/LavineWiki/index.html#pageInitial")

function teste(){
    console.log("ai")
}

homePage()

export default eng