/*This is a reactive class design component, your responsability is create one 
lists events where our events executable in order.
*/

class Reactive{

    ReactiveList = []
    ReactiveList_status = []
    ReactiveList_notify = []


    //pensar apartir daqui como criar uma lista  de execução para o sistema reativo
    syncEffect(){
        console.log("Multiply")
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