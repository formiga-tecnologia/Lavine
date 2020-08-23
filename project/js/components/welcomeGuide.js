import engine from '../../../Framework/engine.js'
var eng =new engine()

function welcomeGuide(user){
    var comp =[
        "<div>"+
        "<h3>Seja bem vindo "+ user +" , a Lavine.js  </h3>"
        +"<h5>Neste modelo de exemplo mostramos como funciona a Lavine</h5>"+
        "<button> Show data </button>"
        +"</div>"   
    ]
    eng.componentsEngine.createComponent("welcome",comp)
    eng.componentsEngine.renderComponent("dinamicType","welcome")
}

export default welcomeGuide