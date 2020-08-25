import EngineApp from '../../Framework/engine.js'
let eng =new EngineApp()

function menu(id){
    eng.componentsEngine.createComponent("menu"+id,registerMenu())
    eng.componentsEngine.renderComponent("dinamic","menu"+id)
}
function registerMenu(){
    
    return "<nav class='menustatic navbar navbar-expand-lg navbar-dark bg-dark'>"+
    "<a class='navbar-brand'>Lavine</a>"+
    "<a class='nav-link active' href='http://127.0.0.1:5500/LavineWiki/index.html#docs'>Documentação</a>"+
    "<a class='nav-link active' href='#' >Sobre</a>"+
    "<form>"+
      "<input class='form-control mr-sm-2' type='search'  placeholder='Procurar...' aria-label='Search'"+
    "</form>"+
    "</nav>"
}

export default menu

