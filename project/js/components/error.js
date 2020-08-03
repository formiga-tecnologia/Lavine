import EngineApp from '../../../Framework/engine.js'

//render obj
var compRender = new EngineApp()
var comp = [
    "<br>"+
    "<div id='errorguide'>"+"Você digitou um argumento incorrerto"+ 
    "</div>"
]
//renderização de objeto tipo 'card'
function error(){
    compRender.componentsEngine.createComponent("erro",comp)
    compRender.componentsEngine.renderComponent("dinamicType","erro")
}

export default error