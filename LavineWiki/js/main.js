import menu from "../components/menu.js"
import EngineApp from '../../Framework/engine.js'
import homePage from "../pages/home.js"
import routes from '../routes/routes.js'

var eng=new EngineApp()
var rto = new routes()
//renderizar o menu
rto.routesCreated()
menu(1)

class functionsClass{
    gotoLink(){

    }
}

export default functionsClass