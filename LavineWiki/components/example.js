import EngineApp from '../../Framework/engine.js'

function example(code){
    let eng = new EngineApp()
    eng.componentsEngine.createComponent("examplea",exampleRender(code))
    eng.componentsEngine.renderComponent("dinamic","examplea")
}

function exampleRender(code){
    return "<br><div class='blackBoxSh'>"+
    "<div class='titleBox'>Live Lavine Editor</div>"+
    "<div class='bodyBox'>"+code+"</div>"+
    "</div>"
}

export default example