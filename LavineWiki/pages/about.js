import EngineApp from '../../Framework/engine.js'
import cardPeople from '../components/cardPeople.js'

let eng = new EngineApp()
function AboutPage(){
    eng.componentsEngine.createComponent("article",AboutRender())
    eng.componentsEngine.renderComponent("dinamic-Article","article")
    cardPeople(0,"team","https://avatars2.githubusercontent.com/u/34559081?s=460&u=cb0712157640e18dea3c4bb479c861c59a28ef97&v=4","Felipe Katao","Developer & CTO","Felipe Katao is developer and design of core the Lavine.js and other products of Formiga Techs")
    cardPeople(1,"team","https://avatars2.githubusercontent.com/u/62511114?s=460&u=2139e5db06ecab070ab08247af1bba3b52161791&v=4","Marcia Alves","UX & QA process","Marcia construct one interface for products and services,and control t5he process of quality the products in Formiga Tech]")
    cardPeople(2,"team","https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTRDof7bpR3WN6nyh5xsNOpwIZVskJBIBd1LA&usqp=CAU","Patrick Silva","Designer","Patrick created sceens page for lavine.")
}
function AboutRender(){
    return "<br><br><article class='articleComp container'><h1>About our team!</h1>"+
    "<div class='m-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit dolorum vero consectetur at architecto corporis fugit eos sunt deleniti, dolor mollitia tempora dolores, repellendus voluptatum vel temporibus sapiente cupiditate?</div>"+
    "<div class='row' id='team'></div>"+
    "</article>"
}

export default AboutPage
