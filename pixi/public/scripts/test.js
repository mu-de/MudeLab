//Create the renderer
var renderer = PIXI.autoDetectRenderer(256, 256);

//Add the canvas to the HTML document
$("#right").append(renderer.view);

//Create a container object called the `stage`
var stage = new PIXI.Container();

//Tell the `renderer` to `render` the `stage`
renderer.render(stage);
