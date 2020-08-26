import EngineApp from '../../Framework/engine.js'
let eng =new EngineApp()

function menu(id){
    eng.componentsEngine.createComponent("menu"+id,registerMenu())
    eng.componentsEngine.renderComponent("dinamic","menu"+id)
}

function registerMenu(){
    return "<nav class='menustatic navbar navbar-expand-lg navbar-dark bg-dark'>"+
    "<a class='navbar-brand' id='homelavine' href='http://127.0.0.1:5500/LavineWiki/index.html'>Lavine</a>"+
    "<a class='nav-link active' id='docLink' href='http://127.0.0.1:5500/LavineWiki/index.html#docs'>Documentação</a>"+
    "<a class='nav-link active' id='AboutLink' href='http://127.0.0.1:5500/LavineWiki/index.html#about' >Sobre</a>"+
    "<form>"+
      "<input class='form-control mr-sm-2' type='search'  placeholder='Procurar...' aria-label='Search'"+
    "</form>"+
    "</nav>"
}

export default menu

