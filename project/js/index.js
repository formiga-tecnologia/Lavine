import EngineApp from '../../Framework/engine.js'
let eng=new EngineApp()
let count =0
let link=""
//API
function Api(data){
    fetch('https://jsonplaceholder.typicode.com/todos/'+data)
    .then(response => response.json())
    .then(json => changeDom(json.title))
}

//Add rota
eng.routesEngine.registerRoute("/page")
eng.routesEngine.registerRoute("/page/search?=")

function GetDadosUpdate(){
    eng.routesEngine.getRouteVars()
    eng.routesEngine.goToLink(window.location.href)
    if(eng.routesEngine.routeVars[5][eng.routesEngine.routeVars[5].length-1]!=0)
    {
        count= eng.routesEngine.routeVars[5][eng.routesEngine.routeVars[5].length-1]
        Api(count)
    }
}
function GetDados(){
    count= parseInt(eng.routesEngine.routeVars[5][eng.routesEngine.routeVars[5].length-1])
    count+=1
    eng.routesEngine.goToLink("http://127.0.0.1:5500/project/index.html#pages/page="+count)
    eng.routesEngine.getRouteVars()
    Api(count)
}
function changeDom(value){
    document.getElementById("consultlist").innerHTML=value
}

//Click para atualizar a rota
document.getElementById("clBt").addEventListener("click",
    function(){GetDados()},false)

//adicionar evento de atualização de pagina
eng.routesEngine.whenUpdate(GetDadosUpdate())