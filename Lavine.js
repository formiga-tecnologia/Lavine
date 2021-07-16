import RenderModule from './Framework/render.js'

//Render Core Set//
class Render{
    _renderModule = new RenderModul
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



//exports class
const _Render =  Render
export {_Render as Render}