import EngineApp from '../../Framework/engine.js'
import blackbox from '../components/blackBox.js'
import menuVertical from '../components/menuVertical.js'
import article from '../components/article.js'

let eng = new EngineApp()

function docs(){
    eng.componentsEngine.createComponent("articleDocs",Renderdocs())
    eng.componentsEngine.renderComponent("dinamic-Article","articleDocs")
}

function Renderdocs(){
    menuVertical()
    article(0,"Introdução","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae quasi tenetur, commodi voluptas aperiam sunt alias autem molestiae sit exercitationem! Labore quo optio placeat minima vero id quis! Dicta."+
    "<ul> <li>Aprenda Lavine</li> <li>Estrutura basica</li> <li>Começando um projeto</li> <li>Construção do projeto</li> <li>Passos Avançados</li> </ul>")
    article(1,"Principais conceitos","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae quasi tenetur, commodi voluptas aperiam sunt alias autem molestiae sit exercitationem! Labore quo optio placeat minima vero id quis! Dicta.")
    article(2,"Pratica inicial","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, eaque? Tempore sint laboriosam tenetur. Ullam alias, corporis aperiam aspernatur esse quod nam. Officia consequuntur laborum eligendi dolorem, debitis temporibus. Id? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, quasi a! Commodi ipsam assumenda, corrupti mollitia nisi optio doloremque ratione velit quo illum nam. Aut quibusdam fugit perferendis labore quam?")
    article(3,"Sobre funções","Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum")
}

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
export default docs
