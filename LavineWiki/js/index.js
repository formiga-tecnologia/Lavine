


class Index {
     Lavine = new EngineApp()
     registerRoutes(){
          Lavine.routesEngine.registerRoute("http://127.0.0.1:5500/LavineWiki/index.html",this.teste)
     }
     teste(){
          console.log("a")
     }
}

export default Index