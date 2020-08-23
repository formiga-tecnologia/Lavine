class RenderEngine {
    //refazer todo o sistema de renderização 
    //não esta sendo pratico usar o registro? pensar nessa possibilidade
    renderElementInPage = []
    registerPage = []
    pageDynamic=""
    SetPageDynamic=""

    //unique render page
    newrenderElement(renderElement, content, selectObjct, classList, Id) {
        let renderCreate = document.createElement(renderElement)
        let nodeContent = document.createTextNode(content)
        let register = 0

        register = parseInt(Math.random() * 10) + "id" + parseInt(Math.random() * 4)
        if (classList != "") {
            renderCreate.classList.add(classList)
        }
        if (Id != "") {
            renderCreate.id = Id
            this.registerPage.push(Id)
        }
        else {
            renderCreate.id = register
            this.registerPage.push(register)
        }
        renderCreate.appendChild(nodeContent)
        document.getElementById(selectObjct).appendChild(renderCreate)
        this.renderElementInPage.push(selectObjct)
    }
    renderHtml(elementTarget,context){
        document.getElementById(elementTarget).innerHTML += context
    }
    changeContentElement(Id,content){
        let nodeContent = document.createTextNode(content)
        document.getElementById(Id).innerHTML=""
        document.getElementById(Id).appendChild(nodeContent)
    }
    removeRender(element){
        document.getElementById(element).remove()
    }
    //Set atribute
    setRenderElementTribute(selectObjectId,atribute,value){
        let select = document.getElementById(selectObjectId)
        select.setAttribute(atribute,value)
    }
    addStyle(selectObjectId,SetRulesArray){
        SetRulesArray.forEach(element => {
           document.getElementById(selectObjectId).classList+=element
        });
    }
    registerDinamicPage(DivId){
        this.pageDynamic=DivId
    }
    clearPage(){
        document.getElementById(this.pageDynamic).innerHTML=""
    }
}

export default RenderEngine