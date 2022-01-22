export class Routes{
    
    goToLink(link:any):void
    getUpdateRoutes():void
    getRouteVars():void
    getRoutesOutside(routetarget:any):void
    removeVarsOfRoute(route:any):any
    registerRoute(routePathRegister:any, compEvent:any):void
    runRoute(initialPage:any, InitialPageRedirect:any):voisd
    whenUpdate(eventClass:any):void
    whenChange(eventClass:any, object:any):void
    whenChangeRoute(eventClass:any):void
    whenChangeLocation(eventClass:any):void
    redirectLocation():void
    addEventSync():void
    resolveAwait():void
    whenAwait(eventClass:any):void
    routeExecution(initialpage:any,initialPageRedirect:any):void
    registerNest(linkedTo:any,routePathRegister:any,compevent:any,nest:any):void
    nestRoutes(targetLocation:any,routeTarget:any,QtdPathNest:any):void
}