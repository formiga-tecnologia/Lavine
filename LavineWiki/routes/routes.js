import EngineApp from '../../Framework/engine.js'
import homePage from "../pages/home.js"
import docs from '../pages/docs.js'

var isCreate=false
var eng=new EngineApp()

class routes{
    routesCreated(){
        
        //sistemas De rotas
        if(isCreate==false){
            eng.routesEngine.registerRoute("http://127.0.0.1:5500/LavineWiki/index.html#pageInitial",this.teste)
            eng.routesEngine.registerRoute("http://127.0.0.1:5500/LavineWiki/index.html#docs",this.docc)   
        }
        isCreate=true
        eng.routesEngine.runRoute("http://127.0.0.1:5500/LavineWiki/index.html","http://127.0.0.1:5500/LavineWiki/index.html#pageInitial")
        eng.routesEngine.whenUpdate(eng.routesEngine.runRoute("http://127.0.0.1:5500/LavineWiki/index.html","http://127.0.0.1:5500/LavineWiki/index.html#pageInitial"))
    
    }
    teste(){
        eng.renderEngine.pageDynamic="dinamic-Article"
        eng.renderEngine.clearPage()
        homePage()
    }
    docc(){
    eng.renderEngine.pageDynamic="dinamic-Article"
    eng.renderEngine.clearPage()
    docs()
    }
    doc(){
        eng.routesEngine.goToLink("http://127.0.0.1:5500/LavineWiki/index.html#docs")
    }
}


export default routes
