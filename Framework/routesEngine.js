class routesEngine{
    routeIndex=window.location.href
    routeVars = []
    listenersEvents = [0]
    //Define Routes
    goToLink(link){
        history.pushState(link,link)
        this.routeIndex=link
        console.log(this.routeIndex)
        window.location.href=link
    }
    //Get vars Routes for pass for own vars
    getRouteVars(){
        this.routeVars=[]
        let countVars =  this.routeIndex.length
        let varA =  this.routeIndex
        let varB =  ""
        for (let index = 0; index < countVars; index++) {
           if(varA[index]!='/')
           {
               varB+=varA[index]
           }
           else{
               this.routeVars.push(varB)
               varB=""
           }
        }
        this.routeVars.push(varB)
    }
    whenUpdate(eventClass){
        this.listenersEvents[0]=eventClass
        window.addEventListener("load",()=>this.listenersEvents[0],false)
    }
}

export default routesEngine
