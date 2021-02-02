/*This is a reactive class design component, your responsability is create one 
lists events where our events executable in order.
*/

class Reactive{

    ReactiveList = []
    ReactiveList_status = []
    ReactiveList_notify = []


    //pensar apartir daqui como criar uma lista  de execução para o sistema reativo
    addReactiveElement(element){
        let value  = element()
        //Add in Reactive List
        this.ReactiveList.push(element)
        this.ReactiveList.push(value)
    }
    findValue(valueElement){
        console.log(valueElement)
    }

    syncEffect(){
        console.log("Multiply")
        for (let index = 0; index < this.ReactiveList.length; index++) {
            if(index%2 ==  0){
                console.log(this.ReactiveList[index]() +" / "+ this.ReactiveList[index+1])
                if(this.ReactiveList[index]() != this.ReactiveList[index+1]){
                    console.log("O valor foi alterado")
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