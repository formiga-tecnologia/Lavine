import EngineApp from '../../Framework/engine.js'

let eng = new EngineApp()
function AboutPage(){
    eng.componentsEngine.createComponent("article",AboutRender())
    eng.componentsEngine.renderComponent("dinamic-Article","article")
}
function AboutRender(){
    return "<br><br><article class='articleComp container'><h1>About our team!</h1>"+
    "<div class='m-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium suscipit dolorum vero consectetur at architecto corporis fugit eos sunt deleniti, dolor mollitia tempora dolores, repellendus voluptatum vel temporibus sapiente cupiditate?</div>"+
    "<br><div class='card aboutcard' style='width: 18rem;color='black''>"+
    "<div class='aboutCreator'><img class='aboutCreator' src='https://avatars2.githubusercontent.com/u/34559081?s=460&u=cb0712157640e18dea3c4bb479c861c59a28ef97&v=4'></div>"+
    "<div class='card-body><h1 class='card-title' style='font-size='10vh''> Felipe Katao </h1>"+
    "<h6 class='card-subtitle mb-2 text-muted'>Developer</h6>"+
    "<p class='card-text'>Lorem lkore sdhsdbasjdsj loren lorne lorne loren klofnejd ate hfduendin jmaimnhxjd </p>"+
    "</div>"+
    "</article>"
}

export default AboutPage