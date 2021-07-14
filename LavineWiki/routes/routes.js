import EngineApp from '../../Framework/engine.js'
import homePage from "../pages/home.js"
import docs from '../pages/docs.js'
import AboutPage from '../pages/about.js'
import articlefrag from '../components/articlefrag.js'

var isCreate=false
var eng=new EngineApp()

class routes{
    //test only
    //engA = new EngineApp()
    routesCreated(){
        
        //sistemas De rotas
        if(isCreate==false){
            eng.routesEngine.registerRoute("http://127.0.0.1:5500/LavineWiki/index.html#pageInitial",this.teste)
            eng.routesEngine.registerRoute("http://127.0.0.1:5500/LavineWiki/index.html#docs",this.docc) 
            eng.routesEngine.registerRoute("http://127.0.0.1:5500/LavineWiki/index.html#about",this.aboutRoute)  
            eng.routesEngine.registerRoute("http://127.0.0.1:5500/LavineWiki/index.html#docs/structurebasic",this.structureBasic)
            let indexPages = "http://127.0.0.1:5500/LavineWiki/index.html#pageInitial"
            eng.routesEngine.whenChangeLocation(eng.routesEngine.goToLink(indexPages))
        }
        isCreate=true
       // this.engA.renderEngine.pageDynamic="resre"
        //console.log(this.engA.renderEngine.pageDynamic)
        eng.routesEngine.runRoute("http://127.0.0.1:5500/LavineWiki/","http://127.0.0.1:5500/LavineWiki/index.html#pageInitial")
        eng.routesEngine.whenUpdate(eng.routesEngine.runRoute("http://127.0.0.1:5500/LavineWiki/","http://127.0.0.1:5500/LavineWiki/index.html#pageInitial"))
        
    
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
    aboutRoute(){
        eng.renderEngine.pageDynamic="dinamic-Article"
        eng.renderEngine.clearPage()
        AboutPage()
    }
    doc(){
        eng.routesEngine.goToLink("http://127.0.0.1:5500/LavineWiki/index.html#docs")
    }
    about(){
        eng.routesEngine.goToLink("http://127.0.0.1:5500/LavineWiki/index.html#about")
    }
    structureBasic(){
        eng.renderEngine.pageDynamic="readArea"
        docs()
        eng.renderEngine.clearPage()
        articlefrag("art0","Architeture of Lavine","Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam culpa laudantium neque fugit, tenetur quis exercitationem, nostrum, vero quasi voluptatibus harum accusantium aspernatur? Esse, repellendus exercitationem ullam perspiciatis rerum sapiente.","readArea")
    }
}


export default routes
