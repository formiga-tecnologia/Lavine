import EngineApp from '../../Framework/engine.js'
import routes from '../routes/routes.js'
import article from '../components/article.js'

var isCreate=false
var eng=new EngineApp()

class routesDoc{
    routesCreated(){
        var bd = this.bind(routes)
        //sistemas De rotas
        if(isCreate==false){
            eng.routesEngine.registerRoute("http://127.0.0.1:5500/LavineWiki/index.html#docs","this.teste")
        }
        isCreate=true
    }

}


export default routesDoc
