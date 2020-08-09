import EngineApp from '../../../Framework/engine.js'
//render obj
var compRender = new EngineApp()
var created=false

//renderização de objeto tipo 'card'
function listCards(){
    var comp = [
        "<ul id='ListGroup' class='list-group'>"
        +"<li class='list-group-item'>Lista de Artigos</li>"
        +"</ul>"
    ]
    if(created==false){
        compRender.componentsEngine.createComponent("list",comp)
    }
    compRender.componentsEngine.renderComponent("dinamicType","list")
    created=true
}

export default listCards