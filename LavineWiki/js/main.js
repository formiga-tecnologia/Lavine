import menu from "../components/menu.js"
import EngineApp from '../../Framework/engine.js'
import homePage from "../pages/home.js"
import routes from '../routes/routes.js'

var eng=new EngineApp()
var rto = new routes()
//renderizar o menu
rto.routesCreated()
menu(1)
document.getElementById("docLink").addEventListener("click",gotolinkDoc,false)
document.getElementById("homelavine").addEventListener("click",homeLink,false)

function gotolinkDoc(){
    rto.doc()
}
function homeLink(){
    rto.teste()
}
class functionsClass{
    gotoLink(){
    }
}

export default functionsClass