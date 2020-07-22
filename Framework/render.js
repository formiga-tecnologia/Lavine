class RenderEngine{
    renderElementInPage=[]
    registerPage =[]
    //Render object page
    renderPage(renderElement,content,selectObjct){
        let render = false
        let renderCreate = document.createElement(renderElement)
        let nodeContent = document.createTextNode(content)
        let register = 0
        this.renderElementInPage.forEach(element => {
            if(document.getElementById(element).id == document.getElementById(selectObjct).id){
                render = true
            }
        })
        while(this.renderElementInPage.length>register){
            if(document.getElementById(this.renderElementInPage[register]).id == document.getElementById(selectObjct).id){
                break
            }
            register+=1
        }
        if(render == false){
            register = parseInt(Math.random()*10)+"id"+parseInt(Math.random()*4)
            renderCreate.id = register
            renderCreate.appendChild(nodeContent)
            document.getElementById(selectObjct).appendChild(renderCreate)
            this.renderElementInPage.push(selectObjct)
            this.registerPage.push(register)
        }
        else{
            document.getElementById(this.registerPage[register]).innerHTML = content
        }
    }
}

export default RenderEngine