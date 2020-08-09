import RenderEngine from '../../../Framework/render.js'

var render = new RenderEngine()
var estyles1 =["navbar ","navbar-expand-lg ","navbar-light ", "bg-light "]
var NavOptions = ["Produtos","Sobre","Ajuda"]

function menu(){
    render.newrenderElement("nav","","dinamicMenu","","nav0")
    render.newrenderElement("a","Lavine","nav0","navbar-brand","idHome")
    render.newrenderElement("div","","nav0","","navbarNav")
    render.newrenderElement("ul","","navbarNav","navbar-nav","listId1")

    render.newrenderElement("li","","listId1","nav-item","elementList1")
    render.newrenderElement("a","Produtos","elementList1","nav-link","listprod")

    render.newrenderElement("li","","listId1","nav-item","elementList2")
    render.newrenderElement("a","Sobre","elementList2","nav-link","")

    render.newrenderElement("li","","listId1","nav-item","elementList3")
    render.newrenderElement("a","Ajuda","elementList3","nav-link","")
    render.newrenderElement("input","","nav0","","searchGuide")
    render.setRenderElementTribute("searchGuide","placeholder","Search Guide")

    //add css menu
    render.addStyle("nav0",estyles1)
    render.addStyle("navbarNav",["collapse ","navbar-collapse"])

    render.newrenderElement("br","","dinamicMenu","","")
}


export default menu