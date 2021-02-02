import EngineApp from '../../Framework/engine.js'
let eng =new EngineApp()

function article(id,title,content,target){
    eng.componentsEngine.createComponent("article"+id,articleRender(title,content))
    eng.componentsEngine.renderComponent(target,"article"+id)
}

function articleRender(title,content){
    return "<br><div class='articleComp'>"+
    "<h1>"+title+"</h1>"+
    "<article>"+content+"</article>"+
    "<hr>"+
    "</div>"
}


export default article