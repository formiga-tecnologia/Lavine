import routesEngine from "./routesEngine.js"
class Security{
    securityRules = []
    reportLog=[]
    routeRegister = false
    routeSecurity = new routesEngine
    AddSecurityRule(rulefunction,NameRule){
        this.securityRules.push(NameRule)
        this.securityRules.push(rulefunction)
    }
    verifyRule(DataVerify){
        this.securityRules.forEach(element => {
            if(DataVerify.includes(element)){
                console.clear()
                console.warn("Your data exist one error of security, ["+ element +" ], its data is apply in log check for security" )
                this.reportLog.push(element+ " < its input is incorrect, exists error or malware code.")
                if(this.routeRegister == true){
                    this.routeSecurity.goToLink(this.routeSecurity.routePath[0])
                }
            }
        });
    }
    redirectRouteSecurity(route){
        if(this.routeRegister == false){
            this.routeSecurity.registerRoute(route)
            this.routeRegister = true
        }
        else{
            this.routeSecurity.routePath[0] = route
        }
    }
}

export default Security