import {RenderModule} from './Framework/render.js'
import {ComponentsEngine} from './Framework/components.js'
import {ReactiveModule} from './Framework/reactive.js'
import {RoutesModule} from './Framework/routesEngine.js'
import {SecurityModule} from './Framework/security.js'

//Render Core Set//
class Render {
    _renderModule = new RenderModule
    newElement(renderElement, content, selectObject, classList, Id) {
        this._renderModule.newrenderElement(renderElement, content, selectObject, classList, Id)
    }
    createHtml(elementTarget, content) {
        this._renderModule.renderHtml(elementTarget, content)
    }
    changeContent(id, content) {
        this._renderModule.changeContentElement(id, content)
    }
    removeElement(element) {
        this._renderModule.removeRender(element)
    }
    setAtribute(elementId, atribute, value) {
        this._renderModule.setRenderElementTribute(elementId, atribute, value)
    }
    addStyle(elementId, ruleCss) {
        this._renderModule.addStyle(elementId, ruleCss)
    }
    registerDinamicPage(pageId) {
        this._renderModule.registerDinamicPage(pageId)
    }
    clearPage() {
        this._renderModule.clearPage()
    }
}
class Components {
    _ComponentsEngine = new ComponentsEngine
    createComponent(componentName, content) {
        this._ComponentsEngine.createComponent(componentName, content)
    }
    renderComponent(targetRender, componentName) {
        this._CComponentsEngine.renderComponent(targetRender, componentName)
    }
    addListener(targetElement, type, functionCall) {
        this._CComponentsEngine.addListener(targetElement, type, functionCall)
    }
}
class Reactive {
    _reactiveModule = new ReactiveModule
    addReactiveElement(element, effect) {
        this._reactiveModule.addReactiveElement(element, effect)
    }
    findValue(valueElement) {
        this._reactiveModule.findValue(valueElement)
    }
    syncEffect() {
        this._reactiveModule.syncEffect()
    }
    createCycle() {
        this._reactiveModule.createCycle()
    }
}

class Routes {
    _routesModule = new RoutesModule
    goToLink(link) {
        this._routesModule.goToLink(link)
    }
    getUpdateRoutes() {
        this._routesModule.getUpdateRoutes()
    }
    getRouteVars() {
        this._routesModule.getRouteVars()
    }
    getRoutesOutside(routetarget) {
        this._routesModule.getRoutesOutside(routetarget)
    }
    removeVarsOfRoute(route) {
       return this._routesModule.removeVarsOfRoute(route)
    }
    registerRoute(routePathRegister, compEvent) {
        this._routesModule.registerRoute(routePathRegister,compEvent)
    }
    runRoute(initialPage, InitialPageRedirect) {
        this._routesModule.runRoute(initialPage,InitialPageRedirect)
    }
    whenUpdate(eventClass) {
        this._routesModule.whenUpdate(eventClass)
    }
    whenChange(eventClass, object) {
        this._routesModule.whenChange(eventClass,object)
    }
    whenChangeRoute(eventClass) {
        this._routesModule.whenChangeRoute(eventClass)
    }
    whenChangeLocation(eventClass) {
        this._routesModule.whenChangeLocation(eventClass)
    }
    redirectLocation() {
        this._routesModule.redirectLocation()
    }
    addEventSync() {
        this._routesModule.addEventSync()
    }
    resolveAwait() {
        this._routesModule.resolveAwait()
    }
    whenAwait(eventClass) {
        this._routesModule.whenAwait(eventClass)
    }
    routeExecution(initialpage,initialPageRedirect){
        this._routesModule.routeExecution(initialpage,initialPageRedirect)
    }
    registerNest(linkedTo,routePathRegister,compevent,nest){
        this._routesModule.registerNest(linkedTo,routePathRegister,compevent,nest)
    }
}
class Security{
    _securityModule = new SecurityModule
    AddSecurityRule(rulefunction,NameRule){
        this._securityModule.AddSecurityRule(rulefunction,NameRule)
    }
    verifyRule(DataVerify){
        this._securityModule.verifyRule(DataVerify)
    }
    redirectRouteSecurity(route){
        this._securityModule.redirectRouteSecurity(route)
    }
}

//exports class
const _Render = Render
export { _Render as Render }

const _ComponentsEngine = Components
export { _ComponentsEngine as Components }

const _Reactive = Reactive
export { _Reactive as Reactive }

const _Routes = Routes
export { _Routes as Routes}

const _security = Security
export {_security as security}