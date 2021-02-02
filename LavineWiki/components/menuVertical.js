import EngineApp from '../../Framework/engine.js'
let eng =new EngineApp()

function menuVertical(){
    eng.componentsEngine.createComponent("vertical",menuVerticalRender())
    eng.componentsEngine.renderComponent("dinamic-Article","vertical")
    eng.componentsEngine.addListener("section_Structure","click",gotoStructure)
}

function  menuVerticalRender(){
    return "<div class='vertical-nav bg-white'>"+
    "<div class='py-4 px-3 mb-4 bg-light'>"+
    "<div class='media-body'><h4 class='m-0'>Lavine</h4>"+
    "<p class='font-weight-light text-muted mb-0>Front end Framework</p>"+
    "</div>"+
    "<ul class='nav flex-column'>"+
    "<li class='nav-item'><a href='http://127.0.0.1:5500/LavineWiki/index.html#docs/start' class='nav-link text-dark  bg-light'><b>Iniciando</b></a></li>"+
    "<li class='nav-item'><a id='section_Structure' href='http://127.0.0.1:5500/LavineWiki/index.html#docs/structurebasic' class='nav-link text-dark  bg-light'><b>Estrutura basica</b></a></li>"+
    "<li class='nav-item'><a class='nav-link text-dark  bg-light'><b>Projeto Basico</b></a></li>"+
    "<li class='nav-item'><a class='nav-link text-dark  bg-light'><b>Guia de referência</b></a></li>"+
    "<li class='nav-item'><a class='nav-link text-dark  bg-light'><b>Contribuindo</b></a></li>"+
    "</ul>"+
    "</div></div>"
}

function gotoStructure(){
    eng.routesEngine.goToLink("http://127.0.0.1:5500/LavineWiki/index.html#docs/structurebasic")
}


export default menuVertical