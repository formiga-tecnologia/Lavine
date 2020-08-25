import EngineApp from '../../Framework/engine.js'
import blackbox from '../components/blackBox.js'
import example from '../components/example.js'
import routes from '../routes/routes.js'

let rot = new routes()
function homePage(){
    let eng = new EngineApp()
    eng.componentsEngine.createComponent("article1",articlePage())
    eng.componentsEngine.renderComponent("dinamic-Article","article1")
    blackbox("Lavine Testes","que isso rapaz a lavine é braba!")
    example("function ComponentTeste(args){<br>   eng.componentsEngine.createComponent('article1',articlePage())<br>}")
    document.getElementById("goBtn").addEventListener("click",goFunctions,false)
}
function goFunctions(){
   rot.doc()
}
function articlePage(){
    return "<br> <br><br><div id='articles' class='container'>"+
    "<div class='row'>"+
    " <div class='col-md-8'><h1>What is Lavine</h1>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt consectetur odio praesentium? Omnis, deleniti? Necessitatibus, alias doloremque tempore velit dolorem incidunt est atque ab corrupti reiciendis ratione sequi impedit. Dolores?</div>"+
    "<div class='col-6 col-md-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed velit nisi iure officia voluptas? Impedit suscipit veritatis ratione et sint quos necessitatibus illo cum provident! Voluptas ex necessitatibus aperiam reiciendis?</div>"+
    "</div>"
}

export default homePage