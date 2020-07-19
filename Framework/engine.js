import routesEngine from './routesEngine.js'
class EngineApp{
    count=0
    rtEng= new routesEngine
    render(object){
        console.log(object)
    }
    gotoLink(object,link){
        document.getElementById(object).addEventListener("click",this.executionLink,false)
    }
    executionLink(link){
        window.location.href=link
       // location.reload()
    }

}

export default  EngineApp
