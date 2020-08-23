import RenderEngine from './render.js'

class Components{
    componentsArray = []
    render = new RenderEngine
    readerVar =""
    varsComp = []
    createComponent(componentName,content){
        let componentNames_bolean = false
        for (let index = 0; index < this.componentsArray.length; index++) {
            if(this.componentsArray[index] == componentName)
            {
                componentNames_bolean=true
                break
            }
        }

        if(componentNames_bolean==false){
            this.componentsArray.push(componentName)
            this.componentsArray.push(content)
        }
        else{
            console.error( componentName+" it name is registred!")
        }
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
    addListener(targetElement,type,functionCall){
        if(document.getElementById(targetElement)!=null){
            document.getElementById(targetElement).addEventListener(type,functionCall,false)
        }
    }
}

export default Components