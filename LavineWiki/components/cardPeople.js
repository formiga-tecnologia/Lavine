import EngineApp from '../../Framework/engine.js'
let eng =new EngineApp()


function cardPeople(id,renderTarget,urlAvatar,name,functionName,text){
    eng.componentsEngine.createComponent("card0"+id,renderPeople(urlAvatar,name,functionName,text))
    eng.componentsEngine.renderComponent(renderTarget,"card0"+id)
}

function renderPeople(urlAvatar,name,functionName,text){
    return  "<br><div class='card aboutcard left' style='width: 18rem;color='black''>"+
    "<div class='aboutCreator'><img class='aboutCreator' src="+urlAvatar+"></div>"+
    "<div class='card-body><h1 class='card-title' style='font-size='10vh''>"+name+"</h1>"+
    "<h6 class='card-subtitle mb-2 text-muted'>"+functionName+"</h6>"+
    "<p class='card-text'>"+text+"</p>"+
    "</div>"
}

export default cardPeople