import EngineApp from '../../Framework/engine.js'
let eng=new EngineApp()
let route= eng.rtEng
let count =0

function GetDados(link){
    fetch('https://jsonplaceholder.typicode.com/todos/'+link)
    .then(response => response.json())
    .then(json => console.log(json))
}

document.getElementById("clBt").addEventListener("click",
    function(){eng.executionLink("http://127.0.0.1:5500/project/index.html#pages/0"+count); count+=1 ; GetDados(count)},false)