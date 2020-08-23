import Index from "../js/index.js"
import menu from "../components/menu.js"
var a=new Index()

//renderizar o menu
a.Lavine.componentsEngine.createComponent("menu",menu())
a.Lavine.componentsEngine.renderComponent("dinamic","menu")