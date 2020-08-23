import EngineApp from '../../Framework/engine.js'

function blackbox(content,body){
    let eng=new EngineApp()
    eng.componentsEngine.createComponent("boxblack",box(content,body))
    eng.componentsEngine.renderComponent("dinamic","boxblack")
}

function box(titulo,body){
    return "<br><div class='card'>"+
    " <div class='card-header'>Lavine Framework</div"+
    "<div class='card-body'>"+
    "<h5 class='card-title'>Special title treatment</h5>"+
    "<p class='card-text'>With supporting text below as a natural lead-in to additional content.</p>"+
    "<a href='#'' class='btn btn-primary'>Go somewhere</a>"+
    "</div></div>"
}

export default blackbox