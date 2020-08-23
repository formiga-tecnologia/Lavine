import EngineApp from '../../Framework/engine.js'

function blackbox(content,body){
    let eng=new EngineApp()
    eng.componentsEngine.createComponent("boxblack",box(content,body))
    eng.componentsEngine.renderComponent("dinamic","boxblack")
}

function box(titulo,body){
    return "<br><div class='container' <br><div class='card'>"+
    " <div class='card-header'>Lavine Framework</div"+
    "<div class='card-body'>"+
    "<h5 class='card-title'>"+titulo+"</h5>"+
    "<p class='card-text'>"+body+"</p>"+
    "<a href='#'' class='btn btn-primary'>Ir para a documentação</a>"+
    "</div></div></div>"
}

export default blackbox