class Security{
    securityRules = []
    reportLog=[]
    AddSecurityRule(rulefunction,NameRule){
        this.securityRules.push(NameRule)
        this.securityRules.push(rulefunction)
    }
    verifyRule(DataVerify){
        this.securityRules.forEach(element => {
            //rules
            if(DataVerify.includes(element)){
                console.log("regra vefificada")
            }
        });
    }
}

export default Security