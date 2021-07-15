//import engine from '/Framework/engine.js'

//Masterizar todas as classes nesta unica classe

function Lavine(){
    console.log("Lavine.Js is running")
}

class LavineCl{
    Lavine(){
        console.log("Lavine.Js is running")
    }
    Version(){
        console.log("Lavine.Js version 1")
    }
}

const _Lavine = Lavine
export { _Lavine as Lavine }
const _LavineCl = LavineCl
export { _LavineCl as LavineCl }