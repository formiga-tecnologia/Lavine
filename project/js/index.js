import EngineApp from '../../Framework/engine.js'
import cards from './components/cards.js'
import welcomeguide from './components/welcomeGuide.js'
import menu from './components/menu.js'
import error from './components/error.js'
let eng = new EngineApp()
let count = 0
let link = ""

menu() //Render Menu 

//API
function Api(data) {
    
    fetch('https://jsonplaceholder.typicode.com/posts/' + data)
        .then(response => response.json())
        .then(json => eng.renderEngine.changeContentElement("header0", json.title))

    fetch('https://jsonplaceholder.typicode.com/posts/' + data)
        .then(response => response.json())
        .then(json => eng.renderEngine.changeContentElement("contentBody", json.body))
}

//Add rota
eng.routesEngine.registerRoute("http://127.0.0.1:5500/project","ola")
eng.routesEngine.registerRoute("http://127.0.0.1:5500/project/index.html","Pagina inicial")
eng.routesEngine.registerRoute("http://127.0.0.1:5500/project/index.html#pages/docs","ola")


function GetDadosUpdate() {
    if(eng.routesEngine.routeIndex == "http://127.0.0.1:5500/project/"){
        welcomeguide()
    }
    if(eng.routesEngine.routeIndex == "http://127.0.0.1:5500/project/index.html")
    {
        welcomeguide()
    }
    if(eng.routesEngine.routeIndex =="http://127.0.0.1:5500/project/index.html#pages/error"){
        error()
    }
    
   //**  else{
        //cards() //aqui renderiza o card 
        //eng.routesEngine.getRouteVars()
        //eng.routesEngine.goToLink(window.location.href)
        //if (eng.routesEngine.routeVars[5][eng.routesEngine.routeVars[5].length - 1] != 0) {
        //    count = eng.routesEngine.routeVars[5][eng.routesEngine.routeVars[5].length - 1]
      //      Api(count)
    //    }
  //  }
    
}
function GetDados() { 
    count = parseInt(eng.routesEngine.routeVars[5][eng.routesEngine.routeVars[5].length - 1])
    count += 1
    eng.renderEngine.changeContentElement("count1","Estamos no registro "+count)
    eng.routesEngine.goToLink("http://127.0.0.1:5500/project/index.html#pages/page=" + count)
    eng.routesEngine.getRouteVars()
    Api(count)
}

//addEventListeners event
function linkEvent(){
    eng.routesEngine.goToLink("http://127.0.0.1:5500/project/index.html#pages/page=1")
    eng.renderEngine.removeRender("welcome-div")
    eng.routesEngine.whenUpdate(GetDadosUpdate())

}

//sistema de componentes//
let comnp=[
    "<br>"+
    "<div id='lavine'>"+"ola aqui fica o conteudo"+ 
    "</div>"+
    "<ul>"+
    "<li id='count1'> Estamos no registro "+count+"</li>"+
    "<li>Pagina 1</li>"+
    "<li>Conteudo dinamico</li>"+
    "</ul>"
]

eng.componentsEngine.createComponent("teste",comnp)
eng.componentsEngine.renderComponent("dinamicType","teste")

//addListenersUpdate 
function addListenerUpdate(){
    eng.componentsEngine.addListener("clBtadd","click",linkEvent)
    eng.componentsEngine.addListener("clBt","click",GetDados)
}
//When update Add listener
//eng.routesEngine.whenUpdate(addListenerUpdate())
//eng.routesEngine.whenUpdate(GetDadosUpdate())

//when async  event
function VerifyRoute(){
   if(count>4){
       console.log("Estamos um  nivel acima")
   }
   if(count>9){
    eng.Security.verifyRule("<div>")
   }
}
//estrutura asicrona para utilizar em RoutesEngine.js
//eng.routesEngine.whenAwait(VerifyRoute)

//teste de segurança
eng.Security.AddSecurityRule("<div>","Html elements in inputs")
eng.Security.redirectRouteSecurity("http://127.0.0.1:5500/project/index.html#pages/error")

//eng.routesEngine.getUpdateRoutes("http://127.0.0.1:5500/project/index.html#pages/docs")
//eng.routesEngine.goToLink("http://127.0.0.1:5500/project/index.html#pages/docs=453")
console.log(eng.routesEngine.removeVarsOfRoute("http://127.0.0.1:5500/project/index.html#pages/docs=453")+"vars: "+eng.routesEngine.routePropsVars)