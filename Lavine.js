import RenderModule from './Framework/render.js'
import ComponentsModule from './Framework/components.js'

//Render Core Set//
class Render{
    _renderModule = new RenderModule
    newElement(renderElement,content,selectObject,classList,Id){
        this._renderModule.newrenderElement(renderElement,content,selectObject,classList,Id)        
    }
    createHtml(elementTarget,content){
        this._renderModule.renderHtml(elementTarget,content)
    }
    changeContent(id,content){
        this._renderModule.changeContentElement(id,content)
    }
    removeElement(element){
        this._renderModule.removeRender(element)
    }
    setAtribute(elementId,atribute,value){
        this._renderModule.setRenderElementTribute(elementId,atribute,value)
    }
    addStyle(elementId,ruleCss){
        this._renderModule.addStyle(elementId,ruleCss)
    }
    registerDinamicPage(pageId){
        this._renderModule.registerDinamicPage(pageId)
    }
    clearPage(){
        this._renderModule.clearPage()
    }
}
class Components{
    _componentsModule = new ComponentsModule 
    createComponent(componentName,content){
        this._componentsModule.createComponent(componentName,content)
    }
    renderComponent(targetRender,componentName){
        this._componentsModule.renderComponent(targetRender,componentName)
    }
    addListener(targetElement,type,functionCall){
        this._componentsModule.addListener(targetElement,type,functionCall)
    }

}


//exports class
const _Render =  Render
export {_Render as Render}

const _components = Components
export {_components as Components}