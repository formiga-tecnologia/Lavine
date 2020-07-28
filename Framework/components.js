import RenderEngine from './render.js'

class Components{
    componentsArray = []
    render = new RenderEngine
    createComponent(componentName,content){
        this.componentsArray.push(componentName)
        this.componentsArray.push(content)
    }
    renderComponent(targetRender,componentName){
        let component =""
        for(let index =0;index<this.componentsArray.length;index++){
            if(this.componentsArray[index]==componentName){
                component = this.componentsArray[index+1]
                break
            }
        }
        this.render.renderHtml(targetRender,component)
    }
}

export default Components