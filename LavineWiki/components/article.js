import EngineApp from '../../Framework/engine.js'
let eng =new EngineApp()

function article(){
    eng.componentsEngine.createComponent("vertical",articleRender())
    eng.componentsEngine.renderComponent("dinamic","vertical")
}

function articleRender(){
    return "<div class='articleComp'>"+
    "<h1>Introdução</h1>"+
    "<article>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae quasi tenetur, commodi voluptas aperiam sunt alias autem molestiae sit exercitationem! Labore quo optio placeat minima vero id quis! Dicta.</article>"+
    "<ul> <li>Aprenda Lavine</li> <li>Estrutura basica</li> <li>Começando um projeto</li> <li>Construção do projeto</li> <li>Passos Avançados</li> </ul>"+
    "</div>"
}


export default article