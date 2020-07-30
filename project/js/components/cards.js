import RenderEngine from '../../../Framework/render.js'


var render = new RenderEngine()

//renderização de objeto tipo 'card'
function cards(){
    render.newrenderElement("div","","dinamicType","card","card0")
    render.newrenderElement("div","","card0","card-header","header0")
    render.newrenderElement("div","","card0","card-body","card1")
    render.newrenderElement("p","","card1","","contentBody")
    render.newrenderElement("br","","dinamicType","","")
    render.newrenderElement("button","Consultar Dados","dinamicType","","clBt")
    render.newrenderElement("br","","dinamicType","","")
}

export default cards