class EngineApp{
    render(object){
        console.log(object)
    }
    gotoLink(object,link){
        document.getElementById(object).addEventListener("click",this.executionLink,false)
    }
    executionLink(){
        window.location.href="http://127.0.0.1:5500/project/index.html#pages/02"
        location.reload()
    }
}

window.onload = function(){
    console.log(window.location.href)
}