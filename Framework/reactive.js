/*This is a reactive class design component, your responsability is create one 
lists events where our events executable in order.
*/

class Reactive{

    ReactiveList = []
    ReactiveList_status = []
    ReactiveList_notify = []


    //pensar apartir daqui como criar uma lista  de execução para o sistema reativo
    addReactiveElement(element,effect){
        let value  = element()
        //Add in Reactive List
        this.ReactiveList.push(element)
        this.ReactiveList.push(value)
        this.ReactiveList_notify.push(element)
        this.ReactiveList_notify.push(effect)
    }
    findValue(valueElement){
        console.log(valueElement)
    }

    syncEffect(){
        for (let index = 0; index < this.ReactiveList.length; index++) {
            if(index%2 ==  0){
                if(this.ReactiveList[index]() != this.ReactiveList[index+1]){
                    this.ReactiveList_notify[index+1]()
                }
            }
        }
        this.resolveAwait()
    }
    
    resolveAwait(){
        return new Promise(() => {
            setTimeout(() => { this.syncEffect() }, 2000)
        })
    }
     async createCycle(){
         console.log("ei")
         this.resolveAwait()
    }

}

export default Reactive