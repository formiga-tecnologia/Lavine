import RenderEngine from '../../../Framework/render.js'
import engine from '../../../Framework/engine.js'

var render = new RenderEngine()
var eng =new engine()


function welcomeGuide(){
    render.newrenderElement("div","","dinamicType","","welcome-div")
    render.newrenderElement("h3","Seja bem vindo a Lavine.js","welcome-div","","")
    render.newrenderElement("h5","Neste modelo de exemplo mostramos como funciona a Lavine","welcome-div","","")
    render.newrenderElement("button","Show Data","welcome-div","","clBtadd")
   
}

export default welcomeGuide