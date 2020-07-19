class routesEngine{
    routeIndex=window.location.href
    //Define Routes
    goToLink(link){
        if(this.routeIndex!=link)
        {
            history.pushState(link,link)
            this.routeIndex=link
        }
        window.location.href=link
    }
}

export default routesEngine
