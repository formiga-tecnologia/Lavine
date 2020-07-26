class RenderEngine {
    //refazer todo o sistema de renderização 
    //não esta sendo pratico usar o registro? pensar nessa possibilidade
    renderElementInPage = []
    registerPage = []

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

    changeContentElement(Id,content){
        let nodeContent = document.createTextNode(content)
        document.getElementById(Id).innerHTML=""
        document.getElementById(Id).appendChild(nodeContent)
    }

    //Set atribute
    setRenderElementTribute(selectObjectId,atribute,value){
        let select = document.getElementById(selectObjectId)
        select.setAttribute(atribute,value)
    }
}

export default RenderEngine