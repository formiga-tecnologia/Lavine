class routesEngine{
    routeIndex=window.location.href
    routeVars = []
    routePath = []
    listenersEvents = [0]
    //Define Routes
    goToLink(link){
        let verifyRoute=false
        //Verify if route is exist in context
        this.routePath.forEach(element => {
            if(link.includes(element)){
                console.log("rota verificada!")
                verifyRoute=true
            }
        });
        if(verifyRoute==true){
            history.pushState(link,link)
            this.routeIndex=link
            window.location.href=link
        }
        else{
            document.getElementById("app").innerText="404 route dont found"
        }
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
    registerRoute(routePathRegister){
        this.routePath.push(routePathRegister)
    }
    //When executes update event in page
    whenUpdate(eventClass){
        this.listenersEvents[0]=eventClass
        window.addEventListener("load",()=>this.listenersEvents[0],false)
    }
}

export default routesEngine
