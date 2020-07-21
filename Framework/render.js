class RenderEngine{
    //Render object page
    renderPage(renderElement,content,selectObjct){
        let renderCreate = document.createElement(renderElement)
        let nodeContent = document.createTextNode(content)
        renderCreate.appendChild(nodeContent)
        document.getElementById(selectObjct).appendChild(renderCreate)
    }
}

export default RenderEngine