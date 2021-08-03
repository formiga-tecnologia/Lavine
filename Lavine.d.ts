//Write this document for import for all functions of Lavine.js//

//render Lavine module
export class Render{
    /**
     * Create one new Element for your page,insert one Id.
     * @param {string} renderElement name of tag Html what your want add to page.
     * @param {string} content Content for your new element.
     * @param {string} selectObject Target object of your add the new element.
     * @param {string} Id Id target for ypur new element.
     */
    newElement(renderElement:any,content:any,selectObject:any,classList:any,Id:any):void
    createHtml(elementTarget:any,content:any):void
    changeContent(id:any,content:any):void
    removeElement(element:any):void
    setAtribute(elementId:any,atribute:any,value:any):void
    addStyle(elementId:any,ruleCss:any):void
    registerDinamicPage(pageId:any):void
    clearPage():void
}

export class ComponentsEngine{
    createComponent(componentName:any,content:any):void
    renderComponent(targetRender:any,componentName:any):void
    addListener(targetElement:any,type:any,functionCall:any):void
}

export class Reactive{
    addReactiveElement(element:any,effect:any):void
    findValue(valueElement:any):void
    syncEffect():void
    createCycle():void
}
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
}
export class Security{
    AddSecurityRule(rulefunction:any,NameRule:any):void
    verifyRule(DataVerify:any):void
    redirectRouteSecurity(route:any):void
}