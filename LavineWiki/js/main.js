import menu from "LavineWiki/components/menu.js"
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
document.getElementById("AboutLink").addEventListener("click",aboutLink,false)
console.log("funcionaaaa")

function gotolinkDoc(){
    rto.doc()
}
function homeLink(){
    rto.teste()
}
function aboutLink(){
    rto.aboutRoute()
}
class functionsClass{
    gotoLink(){
    }
}

export default functionsClass