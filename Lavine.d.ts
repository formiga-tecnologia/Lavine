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