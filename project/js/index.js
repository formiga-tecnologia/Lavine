import EngineApp from '../../Framework/engine.js'
let eng=new EngineApp()
let count =0
let link=""

function GetDadosUpdate(){
    eng.routesEngine.getRouteVars()
    if(eng.routesEngine.routeVars[5][eng.routesEngine.routeVars[5].length-1]!=0)
    {
        count= eng.routesEngine.routeVars[5][eng.routesEngine.routeVars[5].length-1]
        eng.routesEngine.goToLink("http://127.0.0.1:5500/project/index.html#pages/page="+count)
        eng.routesEngine.getRouteVars()
        fetch('https://jsonplaceholder.typicode.com/todos/'+count)
        .then(response => response.json())
        .then(json => changeDom(json.title))
    }
}
function GetDados(){
    count= parseInt(eng.routesEngine.routeVars[5][eng.routesEngine.routeVars[5].length-1])
    count+=1
    eng.routesEngine.goToLink("http://127.0.0.1:5500/project/index.html#pages/page="+count)
    eng.routesEngine.getRouteVars()
    fetch('https://jsonplaceholder.typicode.com/todos/'+count)
    .then(response => response.json())
    .then(json => changeDom(json.title))
}
function changeDom(value){
    document.getElementById("consultlist").innerHTML=value
}

//Click para atualizar a rota
document.getElementById("clBt").addEventListener("click",
    function(){GetDados()},false)

//adicionar evento de atualização de pagina
eng.routesEngine.whenUpdate(GetDadosUpdate())