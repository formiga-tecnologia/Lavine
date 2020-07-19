import EngineApp from '../../Framework/engine.js'
let eng=new EngineApp()
let count =1
let link=""

function GetDados(link){
    eng.routesEngine.goToLink("http://127.0.0.1:5500/project/index.html#pages/0"+count)
    count+=1 
    fetch('https://jsonplaceholder.typicode.com/todos/'+link)
    .then(response => response.json())
    .then(json => console.log(json))
}
//Click para atualizar a rota
document.getElementById("clBt").addEventListener("click",
    function(){GetDados(count)},false)
