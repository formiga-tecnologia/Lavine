import EngineApp from '../../Framework/engine.js'
import menuVertical from '../components/menuVertical.js'
import article from '../components/article.js'

let eng = new EngineApp()

function docs(){
    eng.componentsEngine.createComponent("articleDocs",Renderdocs())
    eng.componentsEngine.renderComponent("dinamic-Article","articleDocs")
    menuVertical()+
    article(0,"Introdução","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae quasi tenetur, commodi voluptas aperiam sunt alias autem molestiae sit exercitationem! Labore quo optio placeat minima vero id quis! Dicta."+
    "<ul> <li>Aprenda Lavine</li> <li>Estrutura basica</li> <li>Começando um projeto</li> <li>Construção do projeto</li> <li>Passos Avançados</li> </ul>","readArea")
    article(1,"Principais conceitos","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad quae quasi tenetur, commodi voluptas aperiam sunt alias autem molestiae sit exercitationem! Labore quo optio placeat minima vero id quis! Dicta.","readArea")
    article(2,"Pratica inicial","Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, eaque? Tempore sint laboriosam tenetur. Ullam alias, corporis aperiam aspernatur esse quod nam. Officia consequuntur laborum eligendi dolorem, debitis temporibus. Id? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, quasi a! Commodi ipsam assumenda, corrupti mollitia nisi optio doloremque ratione velit quo illum nam. Aut quibusdam fugit perferendis labore quam?","readArea")
}

function Renderdocs(){ 
    return ""+
    "<div id='readArea'>"+
    "</div>"
}


export default docs