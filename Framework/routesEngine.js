class routesEngine {
    routeIndex = window.location.href
    routeLine = ""
    routeVars = []
    routePath = []
    routeComp = []
    routePropsVars=[]
    listenersEvents = [0, 1]
    listenerAwaitEvents = ""
    //Define Routes
    goToLink(link) {
        let verifyRoute = false
        let indexRoute=0
        document.location.href = link
        link = this.removeVarsOfRoute(link)
        
        for (let indexRoutesFinder = 0; indexRoutesFinder < this.routePath.length; indexRoutesFinder++) {
            if(this.routePath[indexRoutesFinder] == link){
                verifyRoute=true
                indexRoute =indexRoutesFinder
            }
            
        }
        if (verifyRoute == true) {
                history.pushState(link, link)
                this.routeIndex = link
                window.location.href = link
                this.routeComp[indexRoute]()
                verifyRoute=false
        }
        else {
            //Trabalhar para poder modificar esse aviso, ou a Tag Alvo
            document.getElementById("app").innerText = "404 route dont found"
        }
    }

    getUpdateRoutes() {
        let routeStr=[]
        let countRoutesValid=0
        let FindRoute=""
        //verify exact route
        this.getRouteVars()
        this.routePath.forEach(element => {
            //collect vars outside 
            routeStr=this.getRoutesOutside(element)
            for(let indexVars=0;indexVars<routeStr.length;indexVars++){
                if(routeStr[indexVars].includes(this.routeVars[indexVars])){
                    countRoutesValid++
                }
                else{
                    countRoutesValid=-2
                }
            }
            if(countRoutesValid == routeStr.length && this.routeVars.length == routeStr.length){
                FindRoute=element
                this.goToLink(FindRoute)
            }
            countRoutesValid=0
        });
    }

    getRouteVars() {
        this.routeVars = []
        let countVars = this.routeIndex.length
        let varA = this.routeIndex
        let varB = ""
        for (let index = 0; index < countVars; index++) {
            //include especific vars for search
            if (varA[index] != '/') {
                varB += varA[index]
            }
            else {
                this.routeVars.push(varB)
                varB = ""
            }
        }
        this.routeVars.push(varB)
    }
    getRoutesOutside(routetarget) {
        let TargetRouteVars = []
        let countVars = routetarget.length
        let varA = routetarget
        let varB = ""
        for (let index = 0; index < countVars; index++) {
            if (varA[index] != '/') {
                varB += varA[index]
            }
            else {
                TargetRouteVars.push(varB)
                varB = ""
            }
        }
        TargetRouteVars.push(varB)
        return TargetRouteVars
    }
    removeVarsOfRoute(route){
        this.routePropsVars=[]
        let IndexRouteLength=0
        let newRoute=""
        let varsRoute=""
        while(IndexRouteLength<route.length){
            if(route[IndexRouteLength]=='='){
                for (let index = IndexRouteLength; index < route.length; index++) {
                    if(route[IndexRouteLength]=="/"){
                        break
                    }
                    varsRoute+=route[IndexRouteLength]
                    IndexRouteLength++
                }
            }
            if(varsRoute!=""){
                varsRoute =varsRoute.replace('=','')
                this.routePropsVars.push(varsRoute)
            }
            if(route[IndexRouteLength]!=undefined){
            newRoute+=route[IndexRouteLength]
            }
            varsRoute=""
            IndexRouteLength++
        }
        return newRoute
    }
    registerRoute(routePathRegister, compEvent) {
        this.routePath.push(routePathRegister)
        this.routeComp.push(compEvent)
    }
    runRoute(initialPage,InitialPageRedirect){
        if(window.location.href==initialPage){
            console.log("eita")
            this.goToLink(InitialPageRedirect)
        }
        else{
            this.whenChangeRoute(this.goToLink(this.routeIndex))
        }
        this._PrivateChangeLocation()
    }
    //When executes update event in page
    whenUpdate(eventClass) {
        this.listenersEvents[0] = eventClass
        window.addEventListener("load", () => this.listenersEvents[0], false)
    }
    whenChange(eventClass, object) {
        document.getElementById(object).addEventListener('change', eventClass, false)
    }
    whenChangeRoute(eventClass) {
        this.listenersEvents[1] = eventClass
        window.addEventListener("popstate", this.listenersEvents[1])
    }
    whenChangeLocation(eventClass){
        window.addEventListener('hashchange',eventClass)
    }
    _PrivateChangeLocation(){
        window.addEventListener('hashchange',this.redirectLocation)
    }
    //#24 Problem to redirect to next link in location bar
    redirectLocation(){
        console.log("Olha ai")
        let document = window.location.href.toString()
        console.log(document)
        location.replace(document)
        //Study the functions the routeComp Var
        //console.log(this.routeComp) <= in case future use
    }

    addEventSync() {
        this.resolveAwait()
        this.listenerAwaitEvents()
    }
    resolveAwait() {
        return new Promise(() => {
            setTimeout(() => { this.addEventSync() }, 2000)
        })
    }
    async whenAwait(eventClass) {
        let functionType = eventClass
        this.listenerAwaitEvents = functionType
        let functionA = this.resolveAwait()
    }
}

export default routesEngine
