import EngineApp from '../../Framework/engine.js'
import cards from './components/cards.js'
let eng = new EngineApp()
let count = 0
let link = ""

cards() //aqui renderiza o card 

//API
function Api(data) {

    //teste dos cards//
    
    fetch('https://jsonplaceholder.typicode.com/posts/' + data)
        .then(response => response.json())
        .then(json => eng.renderEngine.changeContentElement("header0", json.title))

    fetch('https://jsonplaceholder.typicode.com/posts/' + data)
        .then(response => response.json())
        .then(json => eng.renderEngine.changeContentElement("contentBody", json.body))
}

//Add rota
eng.routesEngine.registerRoute("#pages/page")
eng.routesEngine.registerRoute("/page/search?=")
eng.routesEngine.registerRoute("http://127.0.0.1:5500/project/")

function GetDadosUpdate() {
    if(eng.routesEngine.routeIndex == "http://127.0.0.1:5500/project/")
    {
        console.log("Index locate")
    }
    else{
        eng.routesEngine.getRouteVars()
        eng.routesEngine.goToLink(window.location.href)
        if (eng.routesEngine.routeVars[5][eng.routesEngine.routeVars[5].length - 1] != 0) {
            count = eng.routesEngine.routeVars[5][eng.routesEngine.routeVars[5].length - 1]
            Api(count)
        }
    }
}
function GetDados() {
    count = parseInt(eng.routesEngine.routeVars[5][eng.routesEngine.routeVars[5].length - 1])
    count += 1
    eng.routesEngine.goToLink("http://127.0.0.1:5500/project/index.html#pages/page=" + count)
    eng.routesEngine.getRouteVars()
    Api(count)
}

//Click para atualizar a rota
document.getElementById("clBt").addEventListener("click",
    function () { GetDados() }, false)
document.getElementById("clBt2").addEventListener("click",function() {document.getElementById("menuNav").innerHTML = document.getElementById("title").innerHTML },false)
//adicionar evento de atualização de pagina
eng.routesEngine.whenUpdate(GetDadosUpdate())

//render
eng.renderEngine.newrenderElement("ul", "", "dinamicMenu", "nav", "menuNav")
for (let a = 0; a < 4; a++) {
    eng.renderEngine.newrenderElement("li", "", "menuNav", "nav-link", "el" + a)
    eng.renderEngine.newrenderElement("a", "Content " + a + " Page", "el" + a, "nav-link", "idList" + a)
    eng.renderEngine.setRenderElementTribute("idList" + a, "href", "#pages/page=4")
}