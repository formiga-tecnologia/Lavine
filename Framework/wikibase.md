# Documentation base for Lavine

welcome to documetation base of Lavine, in it documentation you have rules and good pratices for
creation in your  futures apps writers with the Lavine.

## Creation of an application structure

Lavine does not necessarily need a standard structure, you define what the structure will be, create
an MVC architecture is the best to do, in this tutorial we will show good practice.

### Structure standart with MVC architeture

In MVC architeture  tou have 3 elements  M (model) V(view) C (Controller), where you  divide all elements
with its you have one  big control in your own app, and you app gains scalability. In frist step create paths and files:

* Pages: in its path you create Views for you App.
* Routes: its pages is responsability manager the routes for you app where you can apply Controller
* Components: the components is complement pages where you apply elements can have in your  models.

after you create the path architeture you can  starts create the files.

* Pages / home.js
* Routes / route.js
* Components / menu.js (the component folder you not need create components in it frist step)
* index.js (you can create one folder some it file or no, its is up to you )

now we can creter the start  file for we project.

### Start the frist configurations

in the frist file will the index.js  we import the  engine.js  from framework, follow the example  type from
import:
``` import EngineApp from '../../Framework/engine.js' ```
with is import we can create news functions in routes / renders / components or security, for acess its functionals create onde variable like: ``` var eng=new EngineApp() ```
