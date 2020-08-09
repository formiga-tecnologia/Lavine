import EngineApp from '../../Framework/engine.js'
import cards from './components/cards.js'
import welcomeguide from './components/welcomeGuide.js'
import menu from './components/menu.js'
import error from './components/error.js'
let eng = new EngineApp()

menu() //Render Menu 
eng.renderEngine.registerDinamicPage("dinamicType")
//Add rota
eng.routesEngine.registerRoute("http://127.0.0.1:5500/project/","initialPage")
eng.routesEngine.registerRoute("http://127.0.0.1:5500/project/index.html#pageInitial",welcomeguide)
eng.routesEngine.registerRoute("http://127.0.0.1:5500/project/index.html#pages/docs",docsPage)
eng.routesEngine.registerRoute("http://127.0.0.1:5500/project/index.html#pages/docs/erro",error) 
//ao adicionar uma rota
eng.routesEngine.runRoute("http://127.0.0.1:5500/project/index.html","http://127.0.0.1:5500/project/index.html#pageInitial")

//procurar paginação de documentos
function docsPage(){
    eng.renderEngine.clearPage()
    cards()
    if(eng.routesEngine.routePropsVars[0]!=undefined){
        Api(eng.routesEngine.routePropsVars[0])
    }
    else{
        error()
    }
}
//quando modificar o campo de  procura 
eng.routesEngine.whenChange(searchGuide,"searchGuide")

function searchGuide(){
   let searchArgs = document.getElementById("searchGuide").value.length
   if(searchArgs>0){
    eng.routesEngine.goToLink("http://127.0.0.1:5500/project/index.html#pages/docs="+searchArgs)
   }
   else{
       eng.renderEngine.clearPage()
       eng.routesEngine.goToLink("http://127.0.0.1:5500/project/index.html#pages/docs/erro")
   }
}

document.getElementById("idHome").addEventListener("click",GoMainHome,false)

function GoMainHome(){
    eng.renderEngine.clearPage()
    eng.routesEngine.goToLink("http://127.0.0.1:5500/project/index.html#pageInitial")
}

//API
function Api(data) {  
    fetch('https://jsonplaceholder.typicode.com/posts/' + data)
        .then(response => response.json())
        .then(json => eng.renderEngine.changeContentElement("header0", json.title))

    fetch('https://jsonplaceholder.typicode.com/posts/' + data)
        .then(response => response.json())
        .then(json => eng.renderEngine.changeContentElement("contentBody", json.body))
}