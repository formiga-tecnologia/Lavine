import EngineApp from '../../Framework/engine.js'
import cards from './components/cards.js'
import welcomeguide from './components/welcomeGuide.js'
import menu from './components/menu.js'
import error from './components/error.js'
let eng = new EngineApp()
let count = 0
let link = ""

menu() //Render Menu 

//Add rota
eng.routesEngine.registerRoute("http://127.0.0.1:5500/project/","initialPage")
eng.routesEngine.registerRoute("http://127.0.0.1:5500/project/index.html#pageInitial",welcomeguide)
eng.routesEngine.registerRoute("http://127.0.0.1:5500/project/index.html#pages/docs",cards)

eng.routesEngine.runRoute("http://127.0.0.1:5500/project/index.html","http://127.0.0.1:5500/project/index.html#pageInitial")



//API
//function Api(data) {  
    //fetch('https://jsonplaceholder.typicode.com/posts/' + data)
      //  .then(response => response.json())
      //  .then(json => eng.renderEngine.changeContentElement("header0", json.title))

    //fetch('https://jsonplaceholder.typicode.com/posts/' + data)
      //  .then(response => response.json())
       // .then(json => eng.renderEngine.changeContentElement("contentBody", json.body))
//}